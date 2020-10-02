class AbilityCard < ApplicationRecord
  belongs_to :character_class

  CHARACTER_CARD_BACK = "gloomhaven-Images/images/character-ability-cards/"

  def getCardImage
  	return "#{CHARACTER_CARD_BACK}#{self.character_class.character_abbreviation.upcase}/#{self.image}"
  end
end
