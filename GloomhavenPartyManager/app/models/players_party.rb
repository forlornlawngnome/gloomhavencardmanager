class PlayersParty < ApplicationRecord
	acts_as_tenant(:party)

  belongs_to :player
  belongs_to :party
end
