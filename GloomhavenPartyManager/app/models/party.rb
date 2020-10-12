class Party < ApplicationRecord
	has_many :characters
	has_many :character_classes, through: :characters
	has_many :active_characters,-> { where(is_active: true)}, class_name: "Character"
	has_many :active_character_classes, through: :active_characters,class_name: "CharacterClass", source: :character_class
	has_many :scenarios
	has_many :players_parties, dependent: :destroy
	has_many :players, through: :players_parties

	accepts_nested_attributes_for :players_parties, allow_destroy: true

	def active_scenario
		scenarios.active.first
	end

end
