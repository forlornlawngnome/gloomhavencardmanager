class Player < ApplicationRecord
	has_many :characters
	has_many :players_parties
	has_many :parties, through: :players_parties

	def activeCharacter
		characters.active.first
	end
	def hasActiveCharacter
		if characters.active.count > 0
			return true
		else
			return false
		end
	end

end
