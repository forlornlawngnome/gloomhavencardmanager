class Perk < ApplicationRecord
  belongs_to :character_class
  
  has_many :attack_cards_perks
  has_many :attack_cards, through: :attack_cards_perks

  #effects is a positive or negative number to say wheter you add or remove the associated attack card(s)
end
