class Round < ApplicationRecord
  belongs_to :scenario

  has_many :character_rounds
  has_many :characters, through: :character_rounds
end
