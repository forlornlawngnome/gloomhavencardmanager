class Player < ApplicationRecord
	has_one :character
	has_one :party, through: :character
end
