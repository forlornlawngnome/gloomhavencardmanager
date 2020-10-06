class Party < ApplicationRecord
	has_many :characters
	has_many :scenarios
	has_many :players_parties, dependent: :destroy
	has_many :players, through: :players_parties

	accepts_nested_attributes_for :players_parties, allow_destroy: true

end
