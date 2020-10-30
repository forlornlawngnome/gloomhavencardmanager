class CharacterScenariosController < ApplicationController
  before_action :set_character_scenario, only: [:show, :edit, :update, :destroy, :remove_character, :scenario_setup, :setup_character]


  def scenario_setup
    @character = @character_scenario.character
  end
  def setup_character
    #saves the characters setup
  end

  def remove_character
    scenario = @character_scenario.scenario
    @character_scenario.destroy
    redirect_to play_scenario_path scenario, notice: 'Character was successfully removed.'
  end

  # GET /character_scenarios
  # GET /character_scenarios.json
  def index
    @character_scenarios = CharacterScenario.all
  end

  # GET /character_scenarios/1
  # GET /character_scenarios/1.json
  def show
  end

  # GET /character_scenarios/new
  def new
    @character_scenario = CharacterScenario.new
  end

  # GET /character_scenarios/1/edit
  def edit
  end

  # POST /character_scenarios
  # POST /character_scenarios.json
  def create
    @character_scenario = CharacterScenario.new(character_scenario_params)

    respond_to do |format|
      if @character_scenario.save
        format.html { redirect_to @character_scenario, notice: 'Character scenario was successfully created.' }
        format.json { render :show, status: :created, location: @character_scenario }
      else
        format.html { render :new }
        format.json { render json: @character_scenario.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /character_scenarios/1
  # PATCH/PUT /character_scenarios/1.json
  def update
    respond_to do |format|
      if @character_scenario.update(character_scenario_params)
        format.html { redirect_to @character_scenario, notice: 'Character scenario was successfully updated.' }
        format.json { render :show, status: :ok, location: @character_scenario }
      else
        format.html { render :edit }
        format.json { render json: @character_scenario.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /character_scenarios/1
  # DELETE /character_scenarios/1.json
  def destroy
    @character_scenario.destroy
    respond_to do |format|
      format.html { redirect_to character_scenarios_url, notice: 'Character scenario was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character_scenario
      @character_scenario = CharacterScenario.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def character_scenario_params
      params.require(:character_scenario).permit(:character_id, :scenario_id, :health, :experience, :gold, :is_poison, :is_stun, :is_invisible, :is_strengthen, :is_wound, :is_immobilize, :is_disarm, :is_muddle, :attack_deck_draw_order)
    end
end
