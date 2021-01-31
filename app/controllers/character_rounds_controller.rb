class CharacterRoundsController < ApplicationController
  before_action :set_character_round, only: [:show, :edit, :update, :destroy, :ability_play, :recover_lost,
     :discard_actions, :avoid_damage_active, :items, :active_cards]

  def short_rest
    @character_scenario = CharacterScenario.find(params[:character_scenario_id])

    session[:short_rest] = true
    case params[:commit]
    when "Confirm Card"
      card_confirm =AbilityCard.find(params[:card_id])
      card_confirm.status = "Lost"
      card_confirm.save
      @character_scenario.character.ability_cards.chosen.discarded.update_all(status: "Available")
      redirect_to play_round_character_scenario_path(@character_scenario)
      return
    when "Short Rest"
      @card = @character_scenario.character.ability_cards.chosen.discarded.order('RANDOM()').first
    when "Lose A Different Card"
      AbilityCard.find(params[:card_id]).update(status: "Available")
      card = @character_scenario.character.ability_cards.chosen.discarded.order('RANDOM()').first
      card.status = "Lost"
      card.save
      @character_scenario.character.ability_cards.chosen.discarded.update_all(status: "Available")
      @character_scenario.health = @character_scenario.health - 1
      @character_scenario.save
      flash[:notice] = "You lost #{card.name}"
      flash.keep
      redirect_to(play_round_character_scenario_path(@character_scenario),flash: {notice:  "You lost #{card.name}."})
      return
    else
      raise "uh oh"
    end

  end
  def long_rest
    character_s = CharacterScenario.find(params[:character_scenario_id])
    round = Round.find(params[:round_id])
    card = AbilityCard.find(params[:lost_card_id])
    card.update(status: "Lost")
    party = character_s.party
    character_round = CharacterRound.new(character_scenario: character_s, round: round, long_rest: true, party: party )

    character_s.character.items.active.discarded.update_all(used: false, counter: 0)
    character_s.character.ability_cards.discarded.update_all(status: "Available", counter: 0)
    character_round.save
    redirect_to play_round_character_scenario_path(character_s)
  end
  def ability_play
    card = AbilityCard.find(params[:card_id])
    if params[:discard]
      card.update(status: "Discarded")
      redirect_to play_round_character_scenario_path(@character_round.character_scenario)
      return
    elsif params[:lose]
      card.update(status: "Lost")
      redirect_to play_round_character_scenario_path(@character_round.character_scenario)
      return
    elsif params[:activate]
      card.update(status: "Active", counter: 0)
      redirect_to play_round_character_scenario_path(@character_round.character_scenario)
      return
    else
      raise "gah"
    end
  end
  def active_cards
    card = AbilityCard.find(params[:active_card_id])
    case params[:commit]
    when "Increase Counter"
      card.counter = card.counter + 1
      card.save
      redirect_to play_round_character_scenario_path(@character_round.character_scenario)
      return
    when "Discard Card"
      card.update(status: "Discarded")
      redirect_to play_round_character_scenario_path(@character_round.character_scenario)
      return
    when "Lose Card"
      card.update(status: "Lost")
      redirect_to play_round_character_scenario_path(@character_round.character_scenario)
      return
    else
      raise "sigh"
    end
  end
  def recover_lost
    card = AbilityCard.find(params[:lost_card_id])
    card.update(status: "Available", counter: 0)
    redirect_to play_round_character_scenario_path(@character_round.character_scenario)
  end
  def discard_actions
    card = AbilityCard.find(params[:discarded_card_id])
    if params[:commit]=="Recover Discarded Card"
      card.update(status: "Available", counter: 0)
      redirect_to play_round_character_scenario_path(@character_round.character_scenario)
      return
    elsif params[:commit]=="Lose to Avoid Damage"
      card.update(status: "Lost")
      redirect_to play_round_character_scenario_path(@character_round.character_scenario)
      return
    else
      raise "uh oh"
    end
  end
  def avoid_damage_active
    if params[:commit]=="Discard"
      card = AbilityCard.find(params[:discarded_card_id])
      card.update(status: "Discarded")
      redirect_to play_round_character_scenario_path(@character_round.character_scenario)
      return
    else
      card = AbilityCard.find(params[:discarded_card_id])
      card.update(status: "Lost")
      redirect_to play_round_character_scenario_path(@character_round.character_scenario)
      return
    end
  end
  def items
    item = Item.find(params[:item_id])
    case params[:commit]
    when "Restore Item"
      item.update(used: false, counter: 0)
      redirect_to play_round_character_scenario_path(@character_round.character_scenario)
      return
    when "Use Card"
      item.update(used: true)
      redirect_to play_round_character_scenario_path(@character_round.character_scenario)
      return
    when "Increase Counter"
      if item.counter.nil?
        item.counter = 0
      end
      item.counter = item.counter + 1
      if item.counter >= item.counter_max
        item.used = true
      end
      item.save
      redirect_to play_round_character_scenario_path(@character_round.character_scenario)
      return
    else
      "uh oh"
    end
  end

  def choose_abilities
    character_s = CharacterScenario.find(params[:character_scenario_id])
    round = Round.find(params[:round_id])
    card_1 =  AbilityCard.find(params[:first_card])
    card_2 = AbilityCard.find(params[:second_card])
    short_rest = params[:short_rest]

    party = character_s.party
    character_round = CharacterRound.new(character_scenario: character_s, round: round, card_1_id: card_1.id, card_2_id: card_2.id, short_rest: short_rest, party: party )

    character_round.save
    session[:short_rest] = false

    redirect_to play_round_character_scenario_path(character_s)
  end
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
