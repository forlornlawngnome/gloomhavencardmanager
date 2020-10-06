class CreateCharacterScenarios < ActiveRecord::Migration[6.0]
  def change
    create_table :character_scenarios do |t|
      t.references :character, null: false, foreign_key: true
      t.references :scenario, null: false, foreign_key: true
      t.integer :health
      t.integer :experience
      t.integer :gold
      t.boolean :is_poison
      t.boolean :is_stun
      t.boolean :is_invisible
      t.boolean :is_strengthen
      t.boolean :is_wound
      t.boolean :is_immobilize
      t.boolean :is_disarm
      t.boolean :is_muddle
      t.json :attack_deck_draw_order
      t.references :party, null: false, foreign_key: true

      t.timestamps
    end
  end
end
