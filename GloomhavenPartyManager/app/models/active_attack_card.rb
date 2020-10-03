class ActiveAttackCard < ApplicationRecord
  belongs_to :attack_card
  belongs_to :character

  def getImage
  	self.attack_card.getImage
  end
end
