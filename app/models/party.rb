class Party < ApplicationRecord
	has_many :characters, dependent: :destroy
	has_many :character_classes, through: :characters
	has_many :active_characters,-> { where(is_active: true)}, class_name: "Character"
	has_many :active_character_classes, through: :active_characters,class_name: "CharacterClass", source: :character_class
	has_many :perks, dependent: :destroy
	has_many :attack_cards_perks, through: :perks, dependent: :destroy
	has_many :attack_cards, dependent: :destroy

	has_many :ability_cards, dependent: :destroy

	has_many :scenarios, dependent: :destroy
	has_many :players_parties, dependent: :destroy
	has_many :players, through: :players_parties, dependent: :destroy
	has_many :items, dependent: :destroy

	accepts_nested_attributes_for :players_parties, allow_destroy: true

	after_create :initial_setup

	DATA_LOCATION = Rails.root.join('config', 'gloomhaven')
	CHARACTER_LOCATION = File.join(DATA_LOCATION, 'character_classes')
	PROSPERITY_MAP = {
		0..3 => 1,
		4..8 => 2,
		9..14 => 3,
		15..21 => 4,
		22..29 => 5,
		30..38 => 6,
		39..49 => 7,
		50..63 => 8,
		64 => 9
	}

	REPUTATION_DISCOUNT = {
    -20..-19 => 5,
		-18..-15 => 4,
    -14..-11 => 3,
    -10..-7 => 2,
    -6..-3 => 1,
    -2..2 => 0,
    3..6 => -1,
    7..10 => -2,
    11..14 => -3,
    15..18 => -4,
    19..20 => -5
  }

	def active_scenario
		scenarios.active.first
	end
	def average_level
		characters.active.average(:level)
	end
	def shop_discount
		REPUTATION_DISCOUNT.select {|tic| tic === reputation }.values.first
	end
	def prosperity_actual
		prosperity_calc(prosperity)
	end
	def prosperity_top
		actual = prosperity_actual
		increase = prosperity_calc(prosperity + 1 )
		if actual == increase
			return false
		else
			return true
		end
	end
	def prosperity_range
		PROSPERITY_MAP.select {|tic| tic === prosperity }.keys.first
	end
	def prosperity_tics
		return (prosperity - prosperity_range.begin)
	end
	def prosperity_bottom
		actual = prosperity_actual
		increase = prosperity_calc(prosperity - 1 )
		if actual == increase
			return false
		else
			return true
		end
	end

	def prosperity_calc(value)
		PROSPERITY_MAP.select {|tic| tic === value }.values.first
	end

	def initial_setup
		ActsAsTenant.without_tenant do
			create_items
			create_base_attack_cards

			CharacterClass.all.each do |char_class|
				print char_class.name
				add_abilities(char_class)
				add_attack_modifiers(char_class)
				add_perks(char_class)
			end
		end
	end

	def add_abilities(char_class)
		file_path = File.join(CHARACTER_LOCATION,char_class.file_formated_name, "#{char_class.file_formated_name}_abilities.json")
		file = File.read(file_path)
		abilities = JSON.parse(file)
		abilities.each do |ability|
			new_ability = self.ability_cards.build(name:  ability["name"], initiative: ability["initiative"],
				level: ability["level"], character_class_id: char_class.id, active: false, counter: 0,
				max_counter: ability["counter_max"], image: ability["image"])
			new_ability.save
		end
	end

	def add_attack_modifiers(char_class)
		file_path = File.join(CHARACTER_LOCATION,char_class.file_formated_name, "#{char_class.file_formated_name}_attack_cards.json")
		file = File.read(file_path)
		cards = JSON.parse(file)
		cards.each do |card|
			new_card = self.attack_cards.build(name:  card["name"], character_class_id: char_class.id,
				image: card["image"], value: card["value"], reshuffle: card["reshuffle"], count: card["count"] )
			new_try = new_card.save
		end
	end

	def add_perks(char_class)
		print char_class.name
		file_path = File.join(CHARACTER_LOCATION,char_class.file_formated_name, "#{char_class.file_formated_name}_perk.json")
		file = File.read(file_path)
		perks = JSON.parse(file)
		perks.each do |perk|
			new_perk = self.perks.build(description:  perk["description"], character_class_id: char_class.id,
				count: perk["count"].to_i, applied: 0 )
			new_try = new_perk.save
			if !perk["attack_cards"].nil?
				perk["attack_cards"].each do |attack_obj|
					attack_card = AttackCard.where(name: attack_obj["attack_card"], character_class_id: char_class.id, party: self)
					if attack_card.empty?
						attack_card = AttackCard.where(name: attack_obj["attack_card"], character_class_id: nil, party: self)
					end
					if attack_card.count < 1
						print "sigh #{char_class.name} #{attack_obj["attack_card"]}"
					end
					if attack_card.first.nil?
						print perk.inspect
					end
					if new_perk.nil?
						print perk.inspect
					end
					attack_perk = AttackCardsPerk.new(attack_card_id: attack_card.first.id, perk_id: new_perk.id, effect: attack_obj["effects"], party: self)
					if !attack_perk.valid?
						print attack_perk.errors
					end
					attack_perk.save!
				end
			end
		end
	end

	def create_base_attack_cards
		card_file_path = File.join(DATA_LOCATION, "base_attack_cards.json")
		card_file = File.read(card_file_path)
		cards = JSON.parse(card_file)
		cards.each do |card|
			new_card = self.attack_cards.build(name:  card["name"], image: card["image"], value: card["value"],
				reshuffle: card["reshuffle"], count: card["count"])
			new_card.save
		end
	end

	def create_items
		items_file_path = File.join(DATA_LOCATION, "items.json")
		items_file = File.read(items_file_path)
		items = JSON.parse(items_file)
		items.each do |item|
			count = item["count"]
			for i in 1..count
				unlocked = false
				if item["number"].to_i <= 14
					unlocked = true
				end
				new_item = self.items.build(number: item["number"], name:  item["name"],
					item_type: item["slot"],usage_state: item["limit"], is_unlocked: unlocked,
					negative_effects: item[:negativeCardsCount], counter_max: item["uses"], price: item["price"])
				new_item.save
			end
		end
	end

end
