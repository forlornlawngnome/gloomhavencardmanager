class CreateAttackCardsPerks < ActiveRecord::Migration[6.0]
  def change
    create_table :attack_cards_perks do |t|
      t.references :attack_card, null: false, foreign_key: true
      t.references :perk, null: false, foreign_key: true
      t.references :party, null: false, foreign_key: true

      t.timestamps
    end
  end
end
