class Player < ApplicationRecord
	has_one :character
	has_many :players_parties
	has_many :parties, through: :players_parties
end
