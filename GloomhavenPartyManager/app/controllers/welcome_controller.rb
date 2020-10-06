class WelcomeController < ApplicationController
	skip_before_action :authorized, only: [:index]
	def index
		if logged_in? and !party_chosen?
			redirect_to party_select_path
		end
	end
end
