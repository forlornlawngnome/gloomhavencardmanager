class CreatePerks < ActiveRecord::Migration[6.0]
  def change
    create_table :perks do |t|
      t.string :description
      t.integer :count
      t.references :character_class, null: false, foreign_key: true
      t.integer :effects
      t.integer :applied
      t.references :party, null: false, foreign_key: true

      t.timestamps
    end
  end
end
