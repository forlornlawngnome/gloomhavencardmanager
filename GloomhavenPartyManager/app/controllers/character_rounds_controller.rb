class CharacterRoundsController < ApplicationController
  before_action :set_character_round, only: [:show, :edit, :update, :destroy]

  # GET /character_rounds
  # GET /character_rounds.json
  def index
    @character_rounds = CharacterRound.all
  end

  # GET /character_rounds/1
  # GET /character_rounds/1.json
  def show
  end

  # GET /character_rounds/new
  def new
    @character_round = CharacterRound.new
  end

  # GET /character_rounds/1/edit
  def edit
  end

  # POST /character_rounds
  # POST /character_rounds.json
  def create
    @character_round = CharacterRound.new(character_round_params)

    respond_to do |format|
      if @character_round.save
        format.html { redirect_to @character_round, notice: 'Character round was successfully created.' }
        format.json { render :show, status: :created, location: @character_round }
      else
        format.html { render :new }
        format.json { render json: @character_round.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /character_rounds/1
  # PATCH/PUT /character_rounds/1.json
  def update
    respond_to do |format|
      if @character_round.update(character_round_params)
        format.html { redirect_to @character_round, notice: 'Character round was successfully updated.' }
        format.json { render :show, status: :ok, location: @character_round }
      else
        format.html { render :edit }
        format.json { render json: @character_round.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /character_rounds/1
  # DELETE /character_rounds/1.json
  def destroy
    @character_round.destroy
    respond_to do |format|
      format.html { redirect_to character_rounds_url, notice: 'Character round was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character_round
      @character_round = CharacterRound.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def character_round_params
      params.require(:character_round).permit(:round_id, :character_scenario_id, :card_1_id, :card_2_id, :short_rest, :long_rest)
    end
end
