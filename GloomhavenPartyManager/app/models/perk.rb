class Perk < ApplicationRecord
	acts_as_tenant(:party)
  belongs_to :character_class

  has_many :attack_cards_perks, dependent: :destroy
  has_many :attack_cards, through: :attack_cards_perks, dependent: :destroy

  #effects is a positive or negative number to say wheter you add or remove the associated attack card(s)
end
