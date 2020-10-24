class AbilityCardsEnhancement < ApplicationRecord
	acts_as_tenant(:party)

  belongs_to :ability_card
  belongs_to :enhancement

	LEVEL_COST = [0,25,50,75,100,125,150,175,200]
	PREVIOUS_ENHANCEMENTS = [0, 75, 150, 225]

	before_create :verify_number_enhancements

	def level_costs(level)
		LEVEL_COST[level-1]
	end
	def previous_enhancements(total_enhancements)
		PREVIOUS_ENHANCEMENTS[total_enhancements]
	end
	def cost
		total_cost = self.cost + level_costs(ability_card.level) + previous_enhancements(ability_card.enhancements.count)
	end

	def verify_number_enhancements
		total_enhancements = ability_card.character_class.enhancements.count
		party_prosperity = ability_card.party.prosperity
		if  total_enhancements >= party_prosperity
			errors.add(:ability_card, "Character's Class has already maxed enhancements")
		end
	end

end
