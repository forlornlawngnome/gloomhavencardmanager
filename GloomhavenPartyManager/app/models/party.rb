class Party < ApplicationRecord
	has_many :characters
	has_many :character_classes, through: :characters
	has_many :active_characters,-> { where(is_active: true)}, class_name: "Character"
	has_many :active_character_classes, through: :active_characters,class_name: "CharacterClass", source: :character_class
	has_many :scenarios
	has_many :players_parties, dependent: :destroy
	has_many :players, through: :players_parties

	accepts_nested_attributes_for :players_parties, allow_destroy: true

	after_create :initial_setup

	DATA_LOCATION = Rails.root.join('config', 'gloomhaven')

	def active_scenario
		scenarios.active.first
	end

	def initial_setup
		items_file_path = File.join(DATA_LOCATION, "items.json")
		items_file = File.read(items_file_path)
		items = JSON.parse(items_file)
		items.each do |item|
			count = item["count"]
			for (1..count) do 
				new_item = self.items.build(number: item["number"], name:  item["number"], 
					item_type: item["slot"],usage_state: item["limit"], 
					negative_effects: item[:negativeCardsCount], counter_max: item["uses"], price: item["price"])
				new_item.save
			end
		end
	end

end
