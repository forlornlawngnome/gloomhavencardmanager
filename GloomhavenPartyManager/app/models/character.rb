class Character < ApplicationRecord
  acts_as_tenant(:party)
  belongs_to :character_class
  belongs_to :player
  belongs_to :party

  has_many :perks, through: :character_class
  has_many :ability_cards, through: :character_class
  has_many :items
  has_many :character_scenarios
  has_many :scenarios, through: :character_scenarios
  has_many :character_rounds
  has_many :rounds, through: :character_rounds
  has_many :active_attack_cards

  PERSONAL_QUEST_LOCATION = "gloomhaven-Images/images/personal-goals/"

  scope :active, -> { where(is_active: true) }

  def getQuestImage
  	return "#{PERSONAL_QUEST_LOCATION}#{self.personal_quest}"
  end
end
