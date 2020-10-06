class Round < ApplicationRecord
	acts_as_tenant(:party)
  belongs_to :scenario

  has_many :character_rounds
  has_many :characters, through: :character_rounds
end
