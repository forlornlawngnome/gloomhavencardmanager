class CreateAttackCards < ActiveRecord::Migration[6.0]
  def change
    create_table :attack_cards do |t|
      t.string :name
      t.string :image
      t.string :value
      t.boolean :reshuffle
      t.integer :count
      t.references :character_class, foreign_key: true
      t.references :party, null: false, foreign_key: true

      t.timestamps
    end
  end
end
