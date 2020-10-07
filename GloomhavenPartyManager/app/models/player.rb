class Player < ApplicationRecord
	has_many :characters
	has_many :players_parties
	has_many :parties, through: :players_parties
end
