class CharacterClass < ApplicationRecord
	validates :name, uniqueness: true

	CHARACTER_MAT = "gloomhaven-Images/images/character-mats/"
	CHARACTER_CARD_BACK = "gloomhaven-Images/images/character-ability-cards/"
	ICON_LOCATION = "Icons/"
	has_many :ability_cards
	has_many :enhancements, through: :ability_cards
	has_many :perks
	has_many :attack_cards
 # :name, :nickname, :hand_size, :symbol, :character_abbreviation,  :health, :is_locked


	def getCharacterMatFrontLocation
		return CHARACTER_MAT + "" + self.file_formated_name
	end
	def getCharacterMatBackLocation
		return CHARACTER_MAT + "" + self.file_formated_name + "-back"
	end
	def getCharacterCardBack
		return "#{CHARACTER_CARD_BACK}#{self.character_abbreviation.upcase}/#{self.character_abbreviation.downcase}-back.png"
	end
	def getIconImage
		return "#{ICON_LOCATION}#{self.icon_image}.png"
	end
	def max_health(level)
		health[(level-1)]
	end
	def availablePerks
		perks.where("applied < count" )
	end
	def chosenPerks
		perks.where("applied > 0" )
	end
	def file_formated_name
		self.name.downcase.gsub(" ","-")
	end

end
