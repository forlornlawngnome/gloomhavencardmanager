class AttackCard < ApplicationRecord
	acts_as_tenant(:party)
	belongs_to :character_class, optional: true
	has_many :attack_cards_perks, dependent: :destroy
	has_many :perks, through: :attack_cards_perks, dependent: :destroy
	has_many :active_attack_cards

	IMAGE_LOCATION = "gloomhaven-Images/images/attack-modifiers/"

	scope :bless, ->{where(name: "Bless")}

	def getImage
		if self.character_class.nil?
			return "#{IMAGE_LOCATION}#{self.image}.png"
		else
			return "#{IMAGE_LOCATION}#{self.character_class.character_abbreviation.upcase}/#{self.image}.png"
		end
	end
	def self.back
			return "attack-modifier-back.jpg"
	end
end
