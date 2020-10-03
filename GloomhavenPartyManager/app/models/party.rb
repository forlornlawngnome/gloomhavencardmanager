class Party < ApplicationRecord
	has_many :characters
	has_many :scenarios
end
