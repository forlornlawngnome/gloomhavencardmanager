class WelcomeController < ApplicationController
	skip_before_action :authorized, only: [:index]
	def index
		if logged_in?
			if !party_chosen?
				redirect_to party_select_path
				return
			end
			if !character_chosen?
				redirect_to select_class_characters_path
				return
			end
			if !active_scenario.nil? and active_scenario.rounds.count >= 1
				redirect_to play_character_path active_character
				return
			else
				redirect_to manage_character_path active_character
				return
			end
		end
	end
end
