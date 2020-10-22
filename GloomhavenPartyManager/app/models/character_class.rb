class CharacterClass < ApplicationRecord
	validates :name, uniqueness: true

	CHARACTER_MAT = "gloomhaven-Images/images/character-mats/"
	CHARACTER_CARD_BACK = "gloomhaven-Images/images/character-ability-cards/"

	has_many :ability_cards
	has_many :enhancements, through: :ability_cards
	has_many :perks
	has_many :attack_cards


	def getCharacterMatFrontLocation
		return CHARACTER_MAT + "" + self.file_formated_name
	end
	def getCharacterMatBackLocation
		return CHARACTER_MAT + "" + self.file_formated_name + "-back"
	end
	def getCharacterCardBack
		return "#{CHARACTER_CARD_BACK}#{self.character_abbreviation.upcase}/#{self.character_abbreviation.downcase}-back"
	end
	def availablePerks
		perks.where("applied < count" )
	end
	def chosenPerks
		perks.where("applied > 1" )
	end
	def file_formated_name
		self.name.downcase.gsub(" ","-")
	end

end
