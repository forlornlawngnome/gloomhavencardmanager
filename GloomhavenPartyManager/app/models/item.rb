class Item < ApplicationRecord
  belongs_to :character

  IMAGE_LOCATION = "gloomhaven-Images/images/items/"

  def getImage
  	return "#{IMAGE_LOCATION}#{getItemRange}/#{self.image}"
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
