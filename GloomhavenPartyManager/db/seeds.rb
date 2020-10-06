# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

party = Party.create(name: "Gloomservice", reputation: 14, prosperity: 4)
brute = CharacterClass.create(name: "Brute", hand_size: 10, symbol: "br", image: "", character_abbreviation: "br", card_back: "br", icon_image: "", health: [10,12,14,16,18,20,22,24,26,28], is_locked: false)

ability_card = AbilityCard.create(name: "Balanced Measure", initiative: 77, level: 0, image: "balanced-measure", character_class: brute, active: true, counter: 0, max_counter:0, status: "Available", chosen:true, party: party)
ability_card2 = AbilityCard.create(name: "Other Card", initiative: 60, level: 1, image: "balanced-measure", character_class: brute, active: true, counter: 0, max_counter:2, status: "Available", chosen:true, party: party)

poison = Enhancement.create(description: "Poison", party: party)

attack_card_plus_1 = AttackCard.create(name: "Plus 1", image:"am-p-07", value:"1", reshuffle: false, character_class: nil, party: party)
attack_card_pierce = AttackCard.create(name: "Rolling Pierce 3", image:"am-br-01", value:"3", reshuffle: false, character_class: brute, party: party)

brute_perk = Perk.create(description: "Add Rolling pierce 3", count: 1, character_class: brute, effects: 1, party: party)

attackcard_perk = AttackCardsPerk.create(attack_card: attack_card_pierce, perk: brute_perk, party: party)


test_player = Player.create(name: "test User", email: "Test@user.org")

etude = Character.create(name: "Etude", character_class: brute, level: 8, is_active: true, player: test_player, experience: 250, gold: 75, notes: "10 vermling", personal_quest: "", check_marks: 3, party: party)

boots = Item.create(name: "Boots of Striding", number: 1, image: "boots-of-striding", character: etude,
	is_active: true, counter: 0, counter_max: 0, usage_state: "Spent", used: false, item_type: "boots", negative_effects: "None" , party: party)

test_scenario = Scenario.create(name: "Test Scenario", number: 1, party: party)
PlayersParty.create(player: test_player, party: party)

etude_scenarios = CharacterScenario.create(character: etude, scenario: test_scenario, health: 0, experience: 0,
	gold: 0, is_poison: false, is_stun: false, is_invisible: false, is_strengthen: false, is_wound: false, is_immobilize: false, is_disarm: false, is_muddle: false, attack_deck_draw_order: [1], party: party)

round1 = Round.create(number: 1, scenario:test_scenario, party: party)
round2 = Round.create(number: 2, scenario:test_scenario, party: party)

etude_r1 = CharacterRound.create(round: round1, character_scenario: etude_scenarios, card_1: ability_card, card_2: ability_card2, short_rest: false, long_rest: false, party: party)


etude_attack_card1 = ActiveAttackCard.create(attack_card: attack_card_plus_1, character: etude, party: party)
etude_attack_card2 = ActiveAttackCard.create(attack_card: attack_card_plus_1, character: etude, party: party)
etude_attack_card3 = ActiveAttackCard.create(attack_card: attack_card_pierce, character: etude, party: party)
