class CharacterClass < ApplicationRecord
	CHARACTER_MAT = "gloomhaven-Images/images/character-mats/"
	CHARACTER_CARD_BACK = "gloomhaven-Images/images/character-ability-cards/"
	
	has_many :ability_cards

	def getCharacterMatFrontLocation
		return CHARACTER_MAT + self.name.downcase
	end
	def getCharacterMatBackLocation
		return CHARACTER_MAT + self.name.downcase + "-back"
	end
	def getCharacterCardBack
		return "#{CHARACTER_CARD_BACK}#{self.character_abbreviation.upcase}/#{self.character_abbreviation.downcase}-back"
	end
end
