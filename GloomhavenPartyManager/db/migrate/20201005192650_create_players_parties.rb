class CreatePlayersParties < ActiveRecord::Migration[6.0]
  def change
    create_table :players_parties do |t|
      t.references :player, null: false, foreign_key: true
      t.references :party, null: false, foreign_key: true

      t.timestamps
    end
  end
end
