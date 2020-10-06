class AttackCard < ApplicationRecord
	acts_as_tenant(:party)
	belongs_to :character_class, optional: true
	has_many :attack_cards_perks
	has_many :parks, through: :attack_cards_perks
	has_many :active_attack_cards

	IMAGE_LOCATION = "gloomhaven-Images/images/attack-modifiers/"

	def getImage
		if self.character_class.nil?
			return "#{IMAGE_LOCATION}base/player/#{self.image}"
		else
			return "#{IMAGE_LOCATION}#{self.character_class.character_abbreviation.upcase}/#{self.image}"
		end
	end
end
