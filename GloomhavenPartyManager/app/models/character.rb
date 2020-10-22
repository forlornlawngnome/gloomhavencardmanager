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
  validate :verify_class_uniqueness, :on => :create
  validate :verify_player_uniqueness, :on => :create


  scope :active, -> { where(is_active: true) }

  after_create :enable_ability_cards
  after_create :reset_perks
  after_create :enable_ability_cards

  def getQuestImage
  	return "#{PERSONAL_QUEST_LOCATION}#{self.personal_quest}"
  end

  def level_up_cards(level)
    ability_cards.where("available is false and level <= ?", level)
  end

  private
    def enable_ability_cards
      ability_cards.each do |card|
        if card.level <= 1
          card.available = true
        else
          card.available = false
        end
        card.save
      end
    end
    def reset_perks
      character_class.perks.each do |perk|
        perk.applied = 0
        perk.save
      end
    end
    def verify_prosperity
      if level > 1 and level > party.prosperity
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
    def verify_player_uniqueness
      if player.hasActiveCharacter
        errors.add(:player, 'Player already has an active character in this party.')
      end
    end
end
