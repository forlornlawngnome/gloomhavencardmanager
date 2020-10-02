class CreateCharacterClasses < ActiveRecord::Migration[6.0]
  def change
    create_table :character_classes do |t|
      t.string :name
      t.integer :hand_size
      t.string :symbol
      t.string :image
      t.string :character_abbreviation
      t.string :card_back
      t.string :icon_image
      t.string :plaque
      t.text :health, array: true, default: []
      t.boolean :is_locked

      t.timestamps
    end
  end
end
