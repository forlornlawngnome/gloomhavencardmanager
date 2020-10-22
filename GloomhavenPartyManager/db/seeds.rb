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
CharacterClass.create(name: "Tinkerer", hand_size: 12, symbol: "", character_abbreviation: "ti", health: [8,9,11,12,14,15,17,18,20], is_locked: false)
CharacterClass.create(name: "Spellweaver", hand_size: 8, symbol: "", character_abbreviation: "sw", health: [6,7,8,9,10,11,12,13,14], is_locked: false)
CharacterClass.create(name: "Scoundrel", hand_size: 9, symbol: "", character_abbreviation: "sc", health: [8,9,11,12,14,15,17,18,20], is_locked: false)
CharacterClass.create(name: "Cragheart", hand_size: 11, symbol: "", character_abbreviation: "ch", health: [10,12,14,16,18,20,22,24,26], is_locked: false)
CharacterClass.create(name: "Mindthief", hand_size: 10, symbol: "", character_abbreviation: "mt", health: [6,7,8,9,10,11,12,13,14], is_locked: false)

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
