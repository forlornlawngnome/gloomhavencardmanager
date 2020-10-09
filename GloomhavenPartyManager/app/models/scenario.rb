class Scenario < ApplicationRecord
	acts_as_tenant(:party)
  belongs_to :party

  has_many :character_scenarios
  has_many :characters, through: :character_scenarios
  has_many :rounds

  scope :active, -> { where(active: true) }

  def display
  	return "#{self.number} - #{self.name}"
  end
end
