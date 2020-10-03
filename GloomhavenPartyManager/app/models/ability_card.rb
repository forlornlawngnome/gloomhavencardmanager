class AbilityCard < ApplicationRecord
	belongs_to :character_class
	has_many :ability_cards_enhancements
	has_many :enhancements, through: :ability_cards_enhancements

	validates :name, uniqueness: true

	CARD_IMAGE = "gloomhaven-Images/images/character-ability-cards/"
	
	
	def getCardImage
		return "#{CARD_IMAGE}#{self.character_class.character_abbreviation.upcase}/#{self.image}"
	end
end
