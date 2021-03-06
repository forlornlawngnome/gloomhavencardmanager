class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :number
      t.string :image
      t.references :character, null: true, foreign_key: true
      t.boolean :is_active
      t.boolean :is_unlocked
      t.integer :counter
      t.integer :counter_max
      t.string :usage_state
      t.boolean :used
      t.string :item_type
      t.string :negative_effects
      t.integer :price
      t.references :party, null: false, foreign_key: true

      t.timestamps
    end
  end
end
