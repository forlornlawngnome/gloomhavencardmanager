class AbilityCard < ApplicationRecord
	belongs_to :character_class

	CARD_IMAGE = "gloomhaven-Images/images/character-ability-cards/"
	
	
	def getCardImage
		return "#{CARD_IMAGE}#{self.character_class.character_abbreviation.upcase}/#{self.image}"
	end
end
