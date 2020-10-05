class ApplicationController < ActionController::Base
	before_action :authorized
	helper_method :current_player
	helper_method :logged_in?

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
