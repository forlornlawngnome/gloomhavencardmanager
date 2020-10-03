class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.references :character_class, null: false, foreign_key: true
      t.integer :level
      t.boolean :is_active
      t.references :player, null: false, foreign_key: true
      t.integer :experience
      t.integer :gold
      t.text :notes
      t.string :personal_quest
      t.integer :check_marks
      t.references :party, null: false, foreign_key: true

      t.timestamps
    end
  end
end
