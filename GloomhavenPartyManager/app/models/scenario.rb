class Scenario < ApplicationRecord
	acts_as_tenant(:party)
	after_create :initialize_characters

  belongs_to :party

  has_many :character_scenarios
  has_many :characters, through: :character_scenarios
  has_many :rounds

  scope :active, -> { where(active: true) }

  accepts_nested_attributes_for :character_scenarios, allow_destroy: true

  def display
  	return "#{self.number} - #{self.name}"
  end
  def available_characters
  	ids = self.character_scenarios.pluck(:id)
  	characters = Character.where("id not in (?)",ids)
  	return characters
  end
  def started
  	if rounds.count > 0
  		return true
  	else
  		return false
  	end
  end
  def current_round
  	rounds.order(number: :desc).first
  end
  def initialize_characters
    [].tap do |o|
      Character.active.all.each do |character|
        if !character_scenarios.find { |c| c.character_id == character.id }
          o << CharacterScenario.new(scenario: self, character: character, attack_deck_draw_order: [], health: character.max_health, gold: 0)
        end
      end
      o.each(&:save)
    end
  end
end
