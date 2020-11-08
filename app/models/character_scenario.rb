class CharacterScenario < ApplicationRecord
	acts_as_tenant(:party)
  belongs_to :character
  belongs_to :scenario

	after_create :setup_attack_cards

  def display
  	return "#{self.scenario.display}: #{self.character.name}"
  end

	private
		def setup_attack_cards
			#make sure to start with an empty deck
			character.active_attack_cards.destroy_all

			#set up the base deck
			AttackCard.where(character_class: nil).each do |card|
				card.count.times do
					print card.name
					active_attack = ActiveAttackCard.new(attack_card: card, character: character, is_drawn: false)
					active_attack.save
				end
			end

			#handle perks to add cards
			character.perks.each do |perk|
				perk.applied.times do
					perk.attack_cards_perks.each do |mod|
						if mod.effect > 0
							mod.effect.times do
								active_attack = ActiveAttackCard.new(attack_card_id: mod.attack_card_id, character_id: character.id, is_drawn: false, party: character.party)
								if !active_attack.valid?
									print "#{active_attack.errors.inspect} #{mod.inspect}"
								end
								active_attack.save
							end
						end
					end
				end
			end

			#handle all perks to remove cards
			character.perks.each do |perk|
				perk.applied.times do
					perk.attack_cards_perks.each do |mod|
						if mod.effect < 0
							(mod.effect).abs.times do
								active_attack = ActiveAttackCard.where(attack_card_id: mod.attack_card_id, character_id: character.id)
								active_attack.first.destroy
							end
						end
					end
				end
			end

		end
end
