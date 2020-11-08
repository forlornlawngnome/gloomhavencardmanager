class PlayersPartiesController < ApplicationController
  before_action :set_players_party, only: [:show, :edit, :update, :destroy]

  def party_add
    @players_party = PlayersParty.new(players_party_params)
    if @players_party.save
      redirect_to manage_party_path @players_party.party, notice: 'Player successfully added.'
    else
      render manage_party_path @players_party.party, notice: "Failed to add player."
    end
  end
  # GET /players_parties
  # GET /players_parties.json
  def index
    @players_parties = PlayersParty.all
  end

  # GET /players_parties/1
  # GET /players_parties/1.json
  def show
  end

  # GET /players_parties/new
  def new
    @players_party = PlayersParty.new
  end

  # GET /players_parties/1/edit
  def edit
  end

  # POST /players_parties
  # POST /players_parties.json
  def create
    @players_party = PlayersParty.new(players_party_params)

    respond_to do |format|
      if @players_party.save
        format.html { redirect_to @players_party, notice: 'Players party was successfully created.' }
        format.json { render :show, status: :created, location: @players_party }
      else
        format.html { render :new }
        format.json { render json: @players_party.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /players_parties/1
  # PATCH/PUT /players_parties/1.json
  def update
    respond_to do |format|
      if @players_party.update(players_party_params)
        format.html { redirect_to @players_party, notice: 'Players party was successfully updated.' }
        format.json { render :show, status: :ok, location: @players_party }
      else
        format.html { render :edit }
        format.json { render json: @players_party.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /players_parties/1
  # DELETE /players_parties/1.json
  def destroy
    @players_party.destroy
    respond_to do |format|
      format.html { redirect_to players_parties_url, notice: 'Players party was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_players_party
      @players_party = PlayersParty.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def players_party_params
      params.require(:players_party).permit(:player_id, :party_id)
    end
end
