class AttackCardsPerk < ApplicationRecord
	acts_as_tenant(:party)
  belongs_to :attack_card
  belongs_to :perk
end
