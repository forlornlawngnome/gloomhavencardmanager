# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

########### Enhancement Creation #####################
poison = Enhancement.create(description: "Poison", cost: 75)
stun = Enhancement.create(description: "Wound", cost: 75)
muddle = Enhancement.create(description: "Muddle", cost: 50)
immobile = Enhancement.create(description: "Immobilize", cost: 100)
disarm = Enhancement.create(description: "Disarm", cost: 150)
curse = Enhancement.create(description: "Curse", cost: 75)
Enhancement.create(description: "Strengthen", cost: 50)
Enhancement.create(description: "Bless", cost: 50)
Enhancement.create(description: "Jump", cost: 50)
Enhancement.create(description: "Sun", cost: 100)
Enhancement.create(description: "Moon", cost: 100)
Enhancement.create(description: "Wind", cost: 100)
Enhancement.create(description: "Ice", cost: 100)
Enhancement.create(description: "Fire", cost: 100)
Enhancement.create(description: "Leaf", cost: 100)
Enhancement.create(description: "Any Element", cost: 150)
Enhancement.create(description: "Move +1", cost: 30)
Enhancement.create(description: "Attack +1", cost: 50)
Enhancement.create(description: "Range +1", cost: 30)
Enhancement.create(description: "Shield +1", cost: 100)
Enhancement.create(description: "Push +1", cost: 30)
Enhancement.create(description: "Pull +1", cost: 30)
Enhancement.create(description: "Pierce +1", cost: 30)
Enhancement.create(description: "Retaliate +1", cost: 100)
Enhancement.create(description: "Heal +1", cost: 30)
Enhancement.create(description: "Target +1", cost: 50)
Enhancement.create(description: "Summon Move +1", cost: 100)
Enhancement.create(description: "Summon Attack +1", cost: 100)
Enhancement.create(description: "Summon Range +1", cost: 50)
Enhancement.create(description: "Summon HP +1", cost: 50)
Enhancement.create(description: "Attack Hex, Cost = 200g divided by number of hexes currently targeted", cost: 0)




###########  Class Creations #####################
brute = CharacterClass.create(name: "Brute" , hand_size: 10, symbol: "", character_abbreviation: "br", health: [10,12,14,16,18,20,22,24,26,28], is_locked: false)
CharacterClass.create(name: "Tinkerer", hand_size: 12, symbol: "", character_abbreviation: "tr", health: [8,9,11,12,14,15,17,18,20], is_locked: false)
CharacterClass.create(name: "Spellweaver", hand_size: 8, symbol: "", character_abbreviation: "sw", health: [6,7,8,9,10,11,12,13,14], is_locked: false)
CharacterClass.create(name: "Scoundrel", hand_size: 9, symbol: "", character_abbreviation: "sc", health: [8,9,11,12,14,15,17,18,20], is_locked: false)
CharacterClass.create(name: "Cragheart", hand_size: 11, symbol: "", character_abbreviation: "ch", health: [10,12,14,16,18,20,22,24,26], is_locked: false)
CharacterClass.create(name: "Mindtheif", hand_size: 10, symbol: "", character_abbreviation: "mt", health: [6,7,8,9,10,11,12,13,14], is_locked: false)

CharacterClass.create(name: "Sunkeeper", nickname: "Sun", hand_size: 11, symbol: "", character_abbreviation: "sk", health: [10,12,14,16,18,20,22,24,26], is_locked: true)
CharacterClass.create(name: "Quartermaster", nickname: "Three Spears", hand_size: 9, symbol: "", character_abbreviation: "qm", health: [10,12,14,16,18,20,22,24,26], is_locked: true)
CharacterClass.create(name: "Summoner", nickname: "Circles", hand_size: 9, symbol: "", character_abbreviation: "su", health: [8,9,11,12,14,15,17,18,20], is_locked: true)
CharacterClass.create(name: "Nightshroud", nickname: "Eclipse", hand_size: 9, symbol: "", character_abbreviation: "ns", health: [8,9,11,12,14,15,17,18,20], is_locked: true)
CharacterClass.create(name: "Plagueherald", nickname: "Cthulhu", hand_size: 11, symbol: "", character_abbreviation: "ph", health: [6,7,8,9,10,11,12,13,14], is_locked: true)
CharacterClass.create(name: "Berserker", nickname: "Lightning", hand_size: 10, symbol: "", character_abbreviation: "be", health: [10,12,14,16,18,20,22,24,26], is_locked: true)
CharacterClass.create(name: "Soothsinger", nickname: "Music Notes", hand_size: 9, symbol: "", character_abbreviation: "ss", health: [6,7,8,9,10,11,12,13,14], is_locked: true)
CharacterClass.create(name: "Doomstalker", nickname: "Spikey Face", hand_size: 12, symbol: "", character_abbreviation: "ds", health: [8,9,11,12,14,15,17,18,20], is_locked: true)
CharacterClass.create(name: "Sawbones", nickname: "Saw", hand_size: 10, symbol: "", character_abbreviation: "sb", health: [8,9,11,12,14,15,17,18,20], is_locked: true)
CharacterClass.create(name: "Elementalist", nickname: "Triangles", hand_size: 10, symbol: "", character_abbreviation: "el", health: [6,7,8,9,10,11,12,13,14], is_locked: true)
CharacterClass.create(name: "Beast Tyrant", nickname: "Two Minis", hand_size: 10, symbol: "", character_abbreviation: "bt", health: [6,7,8,9,10,11,12,13,14], is_locked: true)

########### Temp Creation #####################
party = Party.create(name: "Gloomservice", reputation: 14, prosperity: 4)

ability_card = AbilityCard.create(name: "Balanced Measure", initiative: 77, level: 0, image: "balanced-measure", character_class: brute, active: true, counter: 0, max_counter:0, status: "Available", chosen:true, party: party)
ability_card2 = AbilityCard.create(name: "Other Card", initiative: 60, level: 1, image: "balanced-measure", character_class: brute, active: true, counter: 0, max_counter:2, status: "Available", chosen:true, party: party)
AbilityCard.create(name: "Sweeping Blow", initiative: 64, level: 1, image: "sweeping-blow", character_class: brute, active: false, counter: 0, max_counter:0, status: "Available", chosen:false, party: party)


attack_card_plus_1 = AttackCard.create(name: "Plus 1", image:"am-p-07", value:"1", reshuffle: false, character_class: nil, party: party)
attack_card_pierce = AttackCard.create(name: "Rolling Pierce 3", image:"am-br-01", value:"3", reshuffle: false, character_class: brute, party: party)

brute_perk = Perk.create(description: "Add Rolling pierce 3", count: 1, character_class: brute, effects: 1, party: party)
attackcard_perk = AttackCardsPerk.create(attack_card: attack_card_pierce, perk: brute_perk, party: party)


test_player = Player.create(name: "test User", email: "Test@user.org")

etude = Character.create(name: "Etude", character_class: brute, level: 8, is_active: true, player: test_player, experience: 250, gold: 75, notes: "10 vermling", personal_quest: "", check_marks: 3, party: party)

boots = Item.create(name: "Boots of Striding", number: 1, image: "boots-of-striding", character: etude,
	is_active: true, counter: 0, counter_max: 0, usage_state: "Spent", used: false, item_type: "boots", negative_effects: "None" , party: party)

test_scenario = Scenario.create(name: "Test Scenario", number: 1, party: party, active: true)
PlayersParty.create(player: test_player, party: party)

etude_scenarios = CharacterScenario.create(character_id: etude.id, scenario_id: test_scenario.id, health: 0, experience: 0,
	gold: 0, is_poison: false, is_stun: false, is_invisible: false, is_strengthen: false, is_wound: false, is_immobilize: false, is_disarm: false, is_muddle: false, attack_deck_draw_order: [1], party: party)

round1 = Round.create(number: 1, scenario:test_scenario, party: party)
round2 = Round.create(number: 2, scenario:test_scenario, party: party)

etude_r1 = CharacterRound.create(round: round1, character_scenario_id: etude_scenarios.id, card_1: ability_card, card_2: ability_card2, short_rest: false, long_rest: false, party: party)


etude_attack_card1 = ActiveAttackCard.create(attack_card: attack_card_plus_1, character_id: etude.id, party: party)
etude_attack_card2 = ActiveAttackCard.create(attack_card: attack_card_plus_1, character_id: etude.id, party: party)
etude_attack_card3 = ActiveAttackCard.create(attack_card: attack_card_pierce, character_id: etude.id, party: party)
