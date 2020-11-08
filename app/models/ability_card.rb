class AbilityCard < ApplicationRecord
	acts_as_tenant(:party)
	belongs_to :character_class
	has_many :ability_cards_enhancements
	has_many :enhancements, through: :ability_cards_enhancements

	has_many :card_1, class_name: 'CharacterRound', foreign_key: :card_1_id
	has_many :card_2, class_name: 'CharacterRound', foreign_key: :card_2_id

	validates_uniqueness_to_tenant :name

	scope :in_available_deck, ->{where(available: true)}

	scope :chosen, ->{where(chosen: true)}
	scope :available, ->{where(status: "Available")}
	scope :lost, ->{where(status: "Lost")}
	scope :discarded, ->{where(status: "Discarded")}
	scope :active, ->{where(status: "Active")}

	CARD_IMAGE = "gloomhaven-Images/images/character-ability-cards/"

	#active = in active status for round <<<Not used
	#status = Available, discarded, lost
	#available = in Character's available cards
	#chosen = Chosen for scenario


	def getCardImage
		return "#{CARD_IMAGE}#{self.character_class.character_abbreviation.upcase}/#{self.image}.png"
	end
	def getTopEnhancements
		self.ability_cards_enhancements.where(is_top: true)
	end
	def getBottomEnhancements
		self.ability_cards_enhancements.where(is_top: false)
	end
end
