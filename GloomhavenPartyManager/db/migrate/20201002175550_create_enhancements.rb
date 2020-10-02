class CreateEnhancements < ActiveRecord::Migration[6.0]
  def change
    create_table :enhancements do |t|
      t.string :description

      t.timestamps
    end
  end
end
