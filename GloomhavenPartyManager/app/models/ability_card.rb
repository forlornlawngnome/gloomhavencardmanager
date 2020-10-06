class AbilityCard < ApplicationRecord
	acts_as_tenant(:party)
	belongs_to :character_class
	has_many :ability_cards_enhancements
	has_many :enhancements, through: :ability_cards_enhancements

	has_many :card_1, class_name: 'CharacterRound', foreign_key: :card_1_id
	has_many :card_2, class_name: 'CharacterRound', foreign_key: :card_2_id

	validates_uniqueness_to_tenant :name
	
	CARD_IMAGE = "gloomhaven-Images/images/character-ability-cards/"
	
	
	def getCardImage
		return "#{CARD_IMAGE}#{self.character_class.character_abbreviation.upcase}/#{self.image}"
	end
end
