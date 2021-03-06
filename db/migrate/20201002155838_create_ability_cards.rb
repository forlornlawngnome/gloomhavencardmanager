class CreateAbilityCards < ActiveRecord::Migration[6.0]
  def change
    create_table :ability_cards do |t|
      t.string :name
      t.integer :initiative
      t.integer :level
      t.string :image
      t.references :character_class, null: false, foreign_key: true
      t.boolean :active
      t.integer :counter
      t.integer :max_counter
      t.string :status
      t.boolean :available
      t.boolean :chosen
      t.references :party, null: false, foreign_key: true

      t.timestamps
    end
  end
end
