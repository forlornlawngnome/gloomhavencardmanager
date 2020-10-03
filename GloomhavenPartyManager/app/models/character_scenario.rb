class CharacterScenario < ApplicationRecord
  belongs_to :character
  belongs_to :scenario

  def display
  	return "#{self.scenario.display}: #{self.character.name}"
  end
end
