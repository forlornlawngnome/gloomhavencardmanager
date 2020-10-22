class ApplicationController < ActionController::Base
	set_current_tenant_through_filter
	before_action :choose_party

	before_action :authorized
	helper_method :active_party
	helper_method :active_scenario
	helper_method :active_character
	helper_method :party_chosen?
	helper_method :current_player
	helper_method :character_chosen?
	helper_method :logged_in?
	helper_method :data


	def choose_party
		if logged_in?
			if current_player.parties.count > 1
				current_party = Party.find_by(id: session[:party_id])
		    set_current_tenant(current_party)
			else
				current_party = current_player.parties.first
		    set_current_tenant(current_party)
			end
		end

	end

	def active_party
		Party.find_by(id: session[:party_id])
	end
	def active_character
		current_player.activeCharacter 
	end
	def active_scenario
		if active_party and active_party.active_scenario
			return active_party.active_scenario
		else
			return nil
		end
	end
	def party_chosen?
		!active_party.nil?
	end
	def character_chosen?
		!active_character.nil?
	end

	def current_player
	    Player.find_by(id: session[:player_id])
	end
	def logged_in?
	    !current_player.nil?
	end

	private
		def authorized
		   redirect_to root_url unless logged_in?
		end
end
