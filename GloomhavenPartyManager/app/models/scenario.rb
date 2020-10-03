class Scenario < ApplicationRecord
  belongs_to :party

  has_many :character_scenarios
  has_many :characters, through: :character_scenarios
end
