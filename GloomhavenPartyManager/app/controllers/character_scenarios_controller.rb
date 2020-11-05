class CharacterScenariosController < ApplicationController
  before_action :set_character_scenario, only: [:show, :edit, :update, :destroy, :remove_character,
    :scenario_setup, :setup_character, :play_round]


  def scenario_setup
    @character = @character_scenario.character
  end
  def play_round
    @scenario = @character_scenario.scenario
    @character = @character_scenario.character

    @round = @scenario.rounds.order(number: :desc).first
    @character_round = @round.character_rounds.where(character_scenario: @character_scenario).first
  end
  def setup_character
    character = @character_scenario.character
    active_items = []
    active_items << params[:helm_id]
    active_items << params[:armor_id]
    active_items << params[:boots_id]
    if !params[:one_handed_weapon_id].nil?
      params[:one_handed_weapon_id].each do |weapon|
        active_items << weapon
      end
    end
    active_items << params[:two_handed_weapon_id]

    if !params[:items_id].nil?
      params[:items_id].each do |small_item|
        active_items << small_item
      end
    end
    if session[:temple]
      donate1 = ActiveAttackCard.new(attack_card: AttackCard.bless.first, character: @character_scenario.character, is_drawn: false)
      donate2 = ActiveAttackCard.new(attack_card: AttackCard.bless.first, character: @character_scenario.character, is_drawn: false)
      donate1.save
      donate2.save
      session[:temple] = false
    end
    equiped_items = character.items.where(id: active_items)
    equiped_items.update_all(is_active: true)

    unequiped_items = character.items.where.not(id: active_items)
    unequiped_items.update_all(is_active: false)

    active_cards = params[:ability_cards_id]
    equiped_cards = character.ability_cards.where(id: active_cards)
    equiped_cards.update_all(active: true, status: "Available", counter: 0)

    unequiped_cards = character.ability_cards.where.not(id: active_cards)
    unequiped_cards.update_all(active: false)

    @character_scenario.update(experience: 0, gold: 0, is_poison: false, is_stun: false, is_invisible: false,
      is_strengthen: false, is_wound: false, is_immobilize: false, is_disarm: false, is_muddle: false)

    redirect_to scenario_setup_character_scenario_path(@character_scenario)
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
