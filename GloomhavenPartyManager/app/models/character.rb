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

  validate :verify_prosperity, :on => :create
  validate :verify_class_uniqueness

  scope :active, -> { where(is_active: true) }

  def getQuestImage
  	return "#{PERSONAL_QUEST_LOCATION}#{self.personal_quest}"
  end

  private
    def verify_prosperity
      if level > party.prosperity
        errors.add(:level, 'Must be lower than party\'s prosperity')
      end
    end
    def verify_class_uniqueness
      if is_active
        if party.active_character_classes.include?(character_class)
          errors.add(:character_class, 'May only have one character active of each class per party')
        end
      end
    end
end
