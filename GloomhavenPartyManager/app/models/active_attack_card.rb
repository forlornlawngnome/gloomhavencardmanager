class ActiveAttackCard < ApplicationRecord
	acts_as_tenant(:party)
  belongs_to :attack_card
  belongs_to :character

  def getImage
  	self.attack_card.getImage
  end
end
