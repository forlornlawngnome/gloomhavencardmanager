class CreateCharacterRounds < ActiveRecord::Migration[6.0]
  def change
    create_table :character_rounds do |t|
      t.references :round, null: false, foreign_key: true
      t.references :character_scenario, null: false, foreign_key: true
      t.references :card_1, null: true, foreign_key: { to_table: 'ability_cards' }
      t.references :card_2, null: true, foreign_key: { to_table: 'ability_cards' }
      t.boolean :short_rest
      t.boolean :long_rest
      t.references :party, null: false, foreign_key: true

      t.timestamps
    end
  end
end
