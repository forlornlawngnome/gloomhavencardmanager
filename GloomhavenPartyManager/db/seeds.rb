# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

brute = CharacterClass.create(name: "Brute", hand_size: 10, symbol: "br", image: "", character_abbreviation: "br", card_back: "br", icon_image: "", health: [10,12,14,16,18,20,22,24,26,28], is_locked: false)

ability_card = AbilityCard.create(name: "Balanced Measure", initiative: 77, level: 0, image: "balanced-measure", character_class: brute, active: true, counter: 0, max_counter:0, status: "Available", chosen:false)

poison = Enhancement.create(description: "Poison")

attack_card_plus_1 = AttackCard.create(name: "Plus 1", image:"am-p-07", value:"1", reshuffle: false, character_class: nil)
attack_card_pierce = AttackCard.create(name: "Rolling Pierce 3", image:"am-br-01", value:"3", reshuffle: false, character_class: brute)
