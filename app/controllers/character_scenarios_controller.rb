class CharacterScenariosController < ApplicationController
  before_action :set_character_scenario, only: [:show, :edit, :update, :destroy, :remove_character,
    :scenario_setup, :setup_character, :play_round, :update_loot, :draw_attack_card, :shuffle_deck,
    :add_to_attack_deck]

  def draw_attack_card
    deck = @character_scenario.character.active_attack_cards.in_deck
    drawn = deck.order('RANDOM()').first
    drawn.update(is_drawn: true)
    order = @character_scenario.attack_deck_draw_order << drawn.id
    @character_scenario.update(attack_deck_draw_order: order)
    if drawn.attack_card.reshuffle
      session[:shuffle] = true
    end
    redirect_to play_round_character_scenario_path(@character_scenario)
  end
  def shuffle_deck
    active_cards = @character_scenario.character.active_attack_cards.where(is_drawn: true)
    bless = AttackCard.where(name: "Bless").first
    curse = AttackCard.where(name: "Curse").first
    remove_cards = (active_cards.where(attack_card_id: bless.id)).or(active_cards.where(attack_card_id: curse.id))
    remove_cards.destroy_all
    @character_scenario.character.active_attack_cards.update_all(is_drawn: false)
    @character_scenario.update(attack_deck_draw_order: [])
    session[:shuffle]=false
    redirect_to play_round_character_scenario_path(@character_scenario)
  end
  def add_to_attack_deck
    name = params[:card]
    card = AttackCard.where("lower(name) = ?", name.downcase).first
    character = @character_scenario.character

    active_attack = ActiveAttackCard.new(attack_card: card, character: character, is_drawn: false)
    active_attack.save

    redirect_to play_round_character_scenario_path(@character_scenario)
  end

  def update_loot
    if params[:health_minus]
      @character_scenario.update(health: (@character_scenario.health - 1))
    elsif params[:health_plus]
      @character_scenario.update(health: (@character_scenario.health + 1))
    elsif params[:xp_minus]
      @character_scenario.update(experience: (@character_scenario.experience - 1))
    elsif params[:xp_plus]
      @character_scenario.update(experience: (@character_scenario.experience + 1))
    elsif params[:gold_minus]
      @character_scenario.update(gold: (@character_scenario.gold - 1))
    elsif params[:gold_plus]
      @character_scenario.update(gold: (@character_scenario.gold + 1))
    elsif params[:poison]
      @character_scenario.update(is_poison: !@character_scenario.is_poison)
    elsif params[:wound]
      @character_scenario.update(is_wound: !@character_scenario.is_wound)
    elsif params[:immobilize]
      @character_scenario.update(is_immobilize: !@character_scenario.is_immobilize)
    elsif params[:disarm]
      @character_scenario.update(is_disarm: !@character_scenario.is_disarm)
    elsif params[:stun]
      @character_scenario.update(is_stun: !@character_scenario.is_stun)
    elsif params[:muddle]
      @character_scenario.update(is_muddle: !@character_scenario.is_muddle)
    elsif params[:invisible]
      @character_scenario.update(is_invisible: !@character_scenario.is_invisible)
    elsif params[:strengthen]
      @character_scenario.update(is_strengthen: !@character_scenario.is_strengthen)
    else
      raise params.inspect
    end
    redirect_to play_round_character_scenario_path(@character_scenario)
  end
  def scenario_setup
    @character = @character_scenario.character
  end
  def play_round
    #flash.keep
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
    equiped_items.update_all(is_active: true, used: false)

    unequiped_items = character.items.where.not(id: active_items)
    unequiped_items.update_all(is_active: false, used: false)

    active_cards = params[:ability_cards_id]
    equiped_cards = character.ability_cards.where(id: active_cards)
    equiped_cards.update_all(chosen: true, status: "Available", counter: 0)

    unequiped_cards = character.ability_cards.where.not(id: active_cards)
    unequiped_cards.update_all(chosen: false)

    @character_scenario.update(experience: 0, gold: 0, is_poison: false, is_stun: false, is_invisible: false,
      is_strengthen: false, is_wound: false, is_immobilize: false, is_disarm: false, is_muddle: false)

    redirect_to play_scenario_path(@character_scenario.scenario)
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
