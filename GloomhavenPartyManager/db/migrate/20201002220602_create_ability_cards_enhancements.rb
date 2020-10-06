class CreateAbilityCardsEnhancements < ActiveRecord::Migration[6.0]
  def change
    create_table :ability_cards_enhancements do |t|
      t.references :ability_card, null: false, foreign_key: true
      t.references :enhancement, null: false, foreign_key: true
      t.boolean :is_top
      t.references :party, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
