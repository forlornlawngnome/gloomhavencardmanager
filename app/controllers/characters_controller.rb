class CharactersController < ApplicationController
  before_action :set_character, only: [:show, :edit, :update, :destroy, :levelup, :play,
    :manage, :levelup_complete, :retire, :remove_check, :add_check, :add_perk, :apply_perk, :bank, :modify_gold, :modify_xp,
    :shop, :buy_items, :sell_item, :donate_temple, :card_enhancements, :edit_notes]


  def edit_notes
    @character.notes = character_params[:notes]
    @character.save!
    redirect_to manage_character_path @character
  end
  def select_class
    #page lets you select from the different characters
    ids = active_party.active_character_classes.pluck(:id)
    if ids.nil? or ids.empty?
      @available = CharacterClass.all
    else
      @available = CharacterClass.where("id not in (?)", ids)
    end
  end
  def setup
    #Page to name character and select desired level
    @character = Character.new(character_class_id: params[:character_class_id], level: active_party.prosperity)
  end
  def levelup
    #level up the character (choose card, choose perk)
  end
  def add_check
    @character.check_marks = @character.check_marks + 1
    @character.save

    redirect_to manage_character_path @character
  end
  def remove_check
    @character.check_marks = @character.check_marks - 1
    @character.save

    redirect_to manage_character_path @character
  end
  def modify_gold
    @character.gold = @character.gold + params["character"]["gold"].to_i
    @character.save

    redirect_to manage_character_path @character
  end
  def modify_xp
    @character.experience = @character.experience + params["character"]["experience"].to_i
    @character.save

    redirect_to manage_character_path @character
  end
  def shop
    @items = Item.where(character_id: nil, is_unlocked: true).select('distinct on (number) *').order(:number)
  end
  def buy_items
    items = Item.where("id in (?)",params["items_to_buy"])
    cost = items.sum(:price) + items.count*@character.party.shop_discount
    if cost > @character.gold
      redirect_to shop_character_path @character, notice: "You don't have enough gold."
    else
      items.each do |item|
        item.character = @character
        item.save
      end
      @character.gold = @character.gold - cost
      @character.save
      redirect_to manage_character_path @character
    end
  end
  def sell_item
    item = Item.find(params["item_id"])
    item.character_id = nil
    item.save

    @character.gold = @character.gold + item.sell_price
    @character.save
    redirect_to manage_character_path @character
  end
  def donate_temple
    @character.gold = @character.gold - 10

    if @character.save!
      session[:temple] = true
      redirect_to manage_character_path @character, notice: "Successfully donated to the temple. May your next journey be blessed!"
    else
      redirect_to manage_character_path @character, notice: "Failed to donate to the temple"
    end

  end
  def add_perk
  end
  def apply_perk
    perk = Perk.find character_params[:perk_id]
    perk.applied = perk.applied + 1
    save_result = perk.save

    if character_params[:target_level]
      count = @character.perks.sum(:applied)
      if count < @character.player.retired_characters_count(@character.party)
        redirect_to add_perk_character_path @character, level: character_params[:target_level]
      elsif character_params[:target_level].to_f > 1
        redirect_to levelup_character_path @character, level: character_params[:target_level]
      else
        redirect_to manage_character_path @character
      end
      #IF there is a target level, then check if the number of perks applied so far is the same as the players retired
    else
      if save_result
        redirect_to manage_character_path @character, notice: 'Perk was successfully created.'
      else
        render add_perk_character_path @character, notice: 'Perk failed to save.'
      end
    end
  end
  def card_enhancements
  end
  def buy_enhancements
    @character = Character.find params["ability_cards_enhancements"]["character_id"]
    enhance = AbilityCardsEnhancement.new(ability_card_id: params["ability_cards_enhancements"]["ability_card_id"],
      enhancement_id: params["ability_cards_enhancements"]["enhancement_id"], is_top: params["ability_cards_enhancements"]["is_top"])
    cost = enhance.cost(params["ability_cards_enhancements"]["is_multi_target"])

    if cost > @character.gold
      redirect_to card_enhancements_character_path @character, notice: "The cost is #{cost}. You don't have enough gold. "
    else
      item = enhance.save!
      @character.gold = @character.gold - cost
      @character.save
      redirect_to manage_character_path @character
    end
  end
  def levelup_complete
    perk = Perk.find character_params[:perk_id]
    perk.applied = perk.applied + 1
    perk.save!
    #raise perk.inspect

    card = AbilityCard.find character_params[:ability_card_id]
    card.available = true
    card.save

    @character.level = @character.level + 1
    respond_to do |format|
      if @character.save!
        if @character.level < character_params[:target_level].to_f
          format.html { redirect_to levelup_character_path @character, level: character_params[:target_level], notice: 'Character was successfully created.' }
        else
          format.html { redirect_to manage_character_path @character, notice: 'Character was successfully created.' }
        end
      else
        format.html { render levelup_character_path @character, level: character_params[:target_level], notice: 'Character failed to save.'  }
      end
    end
  end
  def play
    #play the scenario
  end
  def manage
    ##Setup deck for the scenario, buy/sell items, temple donate
  end
  def retire
    @character.items.each do |item|
      item.character = nil
      item.save
    end
    @character.is_active = false
    @character.save
    redirect_to select_class_characters_path
  end
  def selected
    #set the character selected in the session
    character = Character.find_by id: params[:character_id]
    session[:character_id] = character.id
    redirect_to root_url
  end

  # GET /characters
  # GET /characters.json
  def index
    @characters = Character.all
  end

  # GET /characters/1
  # GET /characters/1.json
  def show
  end

  # GET /characters/new
  def new
    @character = Character.new
  end

  # GET /characters/1/edit
  def edit
  end

  # POST /characters
  # POST /characters.json
  def create
    @character = Character.new(character_params)
    @character.experience = Character.experienceRequired[@character.level-1]
    @character.gold = (@character.level + 1)*15
    @character.check_marks = 0
    @character.level = 1

    respond_to do |format|
      if @character.save
        if @character.player.retired_characters_count(@character.party) > 0
          redirect_to add_perk_character_path @character, level: character_params[:level]
          return
        else
          if character_params[:level].to_f > 1
            format.html { redirect_to levelup_character_path @character, level: character_params[:level], notice: 'Character was successfully created.' }
            format.json { render :show, status: :created, location: @character }
          else
            format.html { redirect_to manage_character_path @character, notice: 'Character was successfully created.' }
            format.json { render :show, status: :created, location: @character }
          end
        end
      else
        format.html { render :new }
        format.json { render json: @character.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /characters/1
  # PATCH/PUT /characters/1.json
  def update
    respond_to do |format|
      if @character.update(character_params)
        format.html { redirect_to manage_character_path @character, notice: 'Character was successfully updated.' }
        format.json { render :show, status: :ok, location: @character }
      else
        format.html { render :edit }
        format.json { render json: @character.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /characters/1
  # DELETE /characters/1.json
  def destroy
    @character.destroy
    respond_to do |format|
      format.html { redirect_to characters_url, notice: 'Character was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def character_params
      params.require(:character).permit(:name, :character_class_id, :level, :is_active, :player_id,
        :experience, :gold, :notes, :personal_quest, :check_marks, :party_id, :target_level, :perk_id,
        :ability_card_id, perks_attributes: [:id, :applied], ability_cards_enhancements_attributes: [ :id, :is_top, :ability_card_id, :enhancement_id ])
    end
end
