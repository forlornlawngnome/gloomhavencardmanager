class Enhancement < ApplicationRecord
	acts_as_tenant(:party)
	validates :description, uniqueness: true
	has_many :ability_cards_enhancements
	has_many :ability_cards, through: :ability_cards_enhancements
end
