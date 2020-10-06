class AbilityCardsEnhancement < ApplicationRecord
	acts_as_tenant(:party)
	
  belongs_to :ability_card
  belongs_to :enhancement
end
