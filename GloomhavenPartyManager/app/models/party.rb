class Party < ApplicationRecord
	has_many :characters
	has_many :character_classes, through: :characters
	has_many :active_characters,-> { where(is_active: true)}, class_name: "Character"
	has_many :active_character_classes, through: :active_characters,class_name: "CharacterClass", source: :character_class
	has_many :attack_cards
	has_many :ability_cards
	has_many :perks
	has_many :scenarios
	has_many :players_parties, dependent: :destroy
	has_many :players, through: :players_parties
	has_many :items

	accepts_nested_attributes_for :players_parties, allow_destroy: true

	after_create :initial_setup

	DATA_LOCATION = Rails.root.join('config', 'gloomhaven')
	CHARACTER_LOCATION = File.join(DATA_LOCATION, 'character_classes')

	def active_scenario
		scenarios.active.first
	end

	def initial_setup
		create_items
		create_base_attack_cards

		CharacterClass.all.each do |char_class|
			add_abilities(char_class)
			add_attack_modifiers(char_class)
			add_perks(char_class)
		end
	end

	def add_abilities(char_class)
		file_path = File.join(CHARACTER_LOCATION,char_class.file_formated_name, "#{char_class.file_formated_name}_abilities.json")
		file = File.read(file_path)
		abilities = JSON.parse(file)
		abilities.each do |ability|
			new_ability = self.ability_cards.build(name:  ability["name"], initiative: ability[:initiative],
				level: ability[:level], character_class_id: char_class.id, active: false, counter: 0,
				max_counter: ability[:counter_max], image: ability[:image])
			new_try = new_ability.save
			if new_try == false
				raise new_try.inspect
			end
		end
	end

	def add_attack_modifiers(char_class)
	end

	def add_perks(char_class)
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
				new_item = self.items.build(number: item["number"], name:  item["number"],
					item_type: item["slot"],usage_state: item["limit"],
					negative_effects: item[:negativeCardsCount], counter_max: item["uses"], price: item["price"])
				new_item.save
			end
		end
	end

end
