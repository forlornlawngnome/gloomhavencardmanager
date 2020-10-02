# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

brute = CharacterClass.create(name: "Brute", hand_size: 10, symbol: "br", image: "", character_abbreviation: "br", card_back: "br", icon_image: "", health: [10,12,14,16,18,20,22,24,26,28], is_locked: false)