class AttackCardsPerk < ApplicationRecord
  belongs_to :attack_card
  belongs_to :perk
end
