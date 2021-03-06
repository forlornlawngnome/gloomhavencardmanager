class CreateScenarios < ActiveRecord::Migration[6.0]
  def change
    create_table :scenarios do |t|
      t.string :name
      t.integer :number
      t.boolean :active
      t.references :party, null: false, foreign_key: true

      t.timestamps
    end
  end
end
