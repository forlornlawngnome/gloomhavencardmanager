class AbilityCardsEnhancement < ApplicationRecord
	acts_as_tenant(:party)

  belongs_to :ability_card
  belongs_to :enhancement

	LEVEL_COST = [0,25,50,75,100,125,150,175,200]
	PREVIOUS_ENHANCEMENTS = [0, 75, 150, 225]

	before_create :verify_number_enhancements

	def self.level_costs(level)
		LEVEL_COST[level-1]
	end
	def self.previous_enhancements(total_enhancements)
		PREVIOUS_ENHANCEMENTS[total_enhancements]
	end
	def cost(is_multi)
		previous_enhancements = ability_card.ability_cards_enhancements.where(is_top: is_top).count
		enhancement_cost =enhancement.cost

		if is_multi == 1
			enhancement_cost = enhancement_cost *2
		end
		total_cost = enhancement_cost + LEVEL_COST[ability_card.level-1] + PREVIOUS_ENHANCEMENTS[previous_enhancements]
	end

	def verify_number_enhancements
		total_enhancements = ability_card.character_class.enhancements.count
		party_prosperity = ability_card.party.prosperity
		if  total_enhancements >= party_prosperity
			errors.add(:ability_card, "Character's Class has already maxed enhancements")
		end
	end

end
