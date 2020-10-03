class Character < ApplicationRecord
  belongs_to :character_class
  belongs_to :player
  belongs_to :party

  has_many :perks, through: :character_class
  has_many :ability_cards, through: :character_class
  has_many :items
  has_many :character_scenarios
  has_many :scenarios, through: :character_scenarios

  PERSONAL_QUEST_LOCATION = "gloomhaven-Images/images/personal-goals/"

  def getQuestImage
  	return "#{PERSONAL_QUEST_LOCATION}#{self.personal_quest}"
  end
end
