class Player < ApplicationRecord
	has_many :characters
	has_many :players_parties
	has_many :parties, through: :players_parties

	def activeCharacter
		characters.active.first
	end
	def retired_characters_count(party)
		return characters.where(party: party).count - 1
		#if character.count > 1
		#	return characters.count - 1
	#	else
	#		return 0
	#	end
	end
	def hasActiveCharacter
		if characters.active.count > 0
			return true
		else
			return false
		end
	end

end
