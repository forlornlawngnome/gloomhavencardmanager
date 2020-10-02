class CreateAbilityCards < ActiveRecord::Migration[6.0]
  def change
    create_table :ability_cards do |t|
      t.string :name
      t.integer :initiative
      t.integer :level
      t.string :image
      t.references :character_class, null: false, foreign_key: true

      t.timestamps
    end
  end
end
