class CharacterRound < ApplicationRecord
	acts_as_tenant(:party)
  belongs_to :round
  belongs_to :character_scenario
  belongs_to :card_1, class_name: :AbilityCard, optional: true
  belongs_to :card_2, class_name: :AbilityCard, optional: true

  validates :character_scenario, uniqueness: {scope: :round}
end
