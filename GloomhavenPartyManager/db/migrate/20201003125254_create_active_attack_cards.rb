class CreateActiveAttackCards < ActiveRecord::Migration[6.0]
  def change
    create_table :active_attack_cards do |t|
      t.references :attack_card, null: false, foreign_key: true
      t.references :character, null: false, foreign_key: true
      t.boolean :is_drawn
      t.references :party, null: false, foreign_key: true

      t.timestamps
    end
  end
end
