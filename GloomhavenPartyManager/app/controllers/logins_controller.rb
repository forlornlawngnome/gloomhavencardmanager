class LoginsController < ApplicationController
  skip_before_action :authorized, only: [:create, :destroy]
  def new
  end

  def create
    if player = authenticate_with_google
      cookies.signed[:player_id] = player.id
      session[:player_id] = player.id
      redirect_to root_url
    else
      redirect_to root_url, alert: 'authentication_failed'
    end
  end

  def destroy
    session[:player_id] = nil
    session[:party_id] = nil
    redirect_to root_url, notice: "Logged out!"
  end

  private
    def authenticate_with_google
      if id_token = flash[:google_sign_in]["id_token"]
        google_identity = GoogleSignIn::Identity.new(id_token)
        player = Player.find_by google_id: google_identity.user_id
        if player.nil?
          player = Player.find_by email: google_identity.email_address
          if player.nil?
            player = Player.new(name: google_identity.name, email: google_identity.email_address, google_id: google_identity.user_id)
            player.save
          else
            player.google_id = google_identity.user_id
            player.save
          end
        end
        player
      elsif error = flash[:google_sign_in][:error]
        logger.error "Google authentication error: #{error}"
        nil
      end
    end
end