# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_03_125254) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ability_cards", force: :cascade do |t|
    t.string "name"
    t.integer "initiative"
    t.integer "level"
    t.string "image"
    t.bigint "character_class_id", null: false
    t.boolean "active"
    t.integer "counter"
    t.integer "max_counter"
    t.string "status"
    t.boolean "available"
    t.boolean "chosen"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_class_id"], name: "index_ability_cards_on_character_class_id"
  end

  create_table "ability_cards_enhancements", force: :cascade do |t|
    t.bigint "ability_card_id", null: false
    t.bigint "enhancement_id", null: false
    t.boolean "is_top"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ability_card_id"], name: "index_ability_cards_enhancements_on_ability_card_id"
    t.index ["enhancement_id"], name: "index_ability_cards_enhancements_on_enhancement_id"
  end

  create_table "active_attack_cards", force: :cascade do |t|
    t.bigint "attack_card_id", null: false
    t.bigint "character_id", null: false
    t.boolean "is_drawn"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["attack_card_id"], name: "index_active_attack_cards_on_attack_card_id"
    t.index ["character_id"], name: "index_active_attack_cards_on_character_id"
  end

  create_table "attack_cards", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "value"
    t.boolean "reshuffle"
    t.bigint "character_class_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_class_id"], name: "index_attack_cards_on_character_class_id"
  end

  create_table "attack_cards_perks", force: :cascade do |t|
    t.bigint "attack_card_id", null: false
    t.bigint "perk_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["attack_card_id"], name: "index_attack_cards_perks_on_attack_card_id"
    t.index ["perk_id"], name: "index_attack_cards_perks_on_perk_id"
  end

  create_table "character_classes", force: :cascade do |t|
    t.string "name"
    t.integer "hand_size"
    t.string "symbol"
    t.string "image"
    t.string "character_abbreviation"
    t.string "card_back"
    t.string "icon_image"
    t.string "plaque"
    t.text "health", default: [], array: true
    t.boolean "is_locked"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "character_rounds", force: :cascade do |t|
    t.bigint "round_id", null: false
    t.bigint "character_scenario_id", null: false
    t.bigint "card_1_id"
    t.bigint "card_2_id"
    t.boolean "short_rest"
    t.boolean "long_rest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["card_1_id"], name: "index_character_rounds_on_card_1_id"
    t.index ["card_2_id"], name: "index_character_rounds_on_card_2_id"
    t.index ["character_scenario_id"], name: "index_character_rounds_on_character_scenario_id"
    t.index ["round_id"], name: "index_character_rounds_on_round_id"
  end

  create_table "character_scenarios", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "scenario_id", null: false
    t.integer "health"
    t.integer "experience"
    t.integer "gold"
    t.boolean "is_poison"
    t.boolean "is_stun"
    t.boolean "is_invisible"
    t.boolean "is_strengthen"
    t.boolean "is_wound"
    t.boolean "is_immobilize"
    t.boolean "is_disarm"
    t.boolean "is_muddle"
    t.json "attack_deck_draw_order"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_character_scenarios_on_character_id"
    t.index ["scenario_id"], name: "index_character_scenarios_on_scenario_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.bigint "character_class_id", null: false
    t.integer "level"
    t.boolean "is_active"
    t.bigint "player_id", null: false
    t.integer "experience"
    t.integer "gold"
    t.text "notes"
    t.string "personal_quest"
    t.integer "check_marks"
    t.bigint "party_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_class_id"], name: "index_characters_on_character_class_id"
    t.index ["party_id"], name: "index_characters_on_party_id"
    t.index ["player_id"], name: "index_characters_on_player_id"
  end

  create_table "enhancements", force: :cascade do |t|
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.integer "number"
    t.string "image"
    t.bigint "character_id", null: false
    t.boolean "is_active"
    t.integer "counter"
    t.integer "counter_max"
    t.string "usage_state"
    t.boolean "used"
    t.string "item_type"
    t.string "negative_effects"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_items_on_character_id"
  end

  create_table "parties", force: :cascade do |t|
    t.string "name"
    t.integer "reputation"
    t.decimal "prosperity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "perks", force: :cascade do |t|
    t.string "description"
    t.integer "count"
    t.bigint "character_class_id", null: false
    t.integer "effects"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_class_id"], name: "index_perks_on_character_class_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "google_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "rounds", force: :cascade do |t|
    t.integer "number"
    t.bigint "scenario_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["scenario_id"], name: "index_rounds_on_scenario_id"
  end

  create_table "scenarios", force: :cascade do |t|
    t.string "name"
    t.integer "number"
    t.bigint "party_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["party_id"], name: "index_scenarios_on_party_id"
  end

  add_foreign_key "ability_cards", "character_classes"
  add_foreign_key "ability_cards_enhancements", "ability_cards"
  add_foreign_key "ability_cards_enhancements", "enhancements"
  add_foreign_key "active_attack_cards", "attack_cards"
  add_foreign_key "active_attack_cards", "characters"
  add_foreign_key "attack_cards", "character_classes"
  add_foreign_key "attack_cards_perks", "attack_cards"
  add_foreign_key "attack_cards_perks", "perks"
  add_foreign_key "character_rounds", "ability_cards", column: "card_1_id"
  add_foreign_key "character_rounds", "ability_cards", column: "card_2_id"
  add_foreign_key "character_rounds", "character_scenarios"
  add_foreign_key "character_rounds", "rounds"
  add_foreign_key "character_scenarios", "characters"
  add_foreign_key "character_scenarios", "scenarios"
  add_foreign_key "characters", "character_classes"
  add_foreign_key "characters", "parties"
  add_foreign_key "characters", "players"
  add_foreign_key "items", "characters"
  add_foreign_key "perks", "character_classes"
  add_foreign_key "rounds", "scenarios"
  add_foreign_key "scenarios", "parties"
end
