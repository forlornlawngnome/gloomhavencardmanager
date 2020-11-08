class PlayersParty < ApplicationRecord
	validates_uniqueness_of :player_id, scope: :party_id
  belongs_to :player
  belongs_to :party
end
