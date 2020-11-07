class Item < ApplicationRecord
  acts_as_tenant(:party)
  belongs_to :character, optional: true

  IMAGE_LOCATION = "gloomhaven-Images/images/items/"
  PROSPERITY_ITEM_UNLOCK = [14, 21, 28, 35, 42, 49, 56, 63, 70]

  scope :head, -> { where(item_type: "Head") }
  scope :boots, -> { where(item_type: "Legs") }
  scope :armor, -> { where(item_type: "Body") }
  scope :small_item, -> { where(item_type: "SmallItem") }
  scope :onehand, -> { where(item_type: "OneHand") }
  scope :twohand, -> { where(item_type: "TwoHands") }

  scope :active, ->{where(is_active: true)}
  scope :available, ->{where(used: false)}
  scope :discarded, ->{where(used: true, usage_state: "Spent")}
  scope :lost, ->{where(used: true, usage_state: "Consumed")}

  def getImage
  	return "#{IMAGE_LOCATION}#{getItemRange}/#{self.getFileName}"
  end
  def getFileName
    self.name.gsub(" ","-").gsub("'","").downcase
  end

  def self.prosperityItem(prosperity)
    PROSPERITY_ITEM_UNLOCK[prosperity]
  end
  def display
    "#{number} - #{name}"
  end
  private
	  def getItemRange
	  	case self.number
	  	when 1..14
	  		return "1-14"
	  	when 15..21
	  		return "15-21"
	  	when 22..28
	  		return "22-28"
	  	when 29..35
	  		return "29-35"
	  	when 36..42
	  		return "36-42"
	  	when 43..49
	  		return "43-49"
	  	when 50..56
	  		return "50-56"
	  	when 57..63
	  		return "57-63"
	  	when 64..151
	  		return "64-151"
	  	when 152..165
	  		return "152-165"
	  	end
	  end

end
