class CharactersController < ApplicationController
  before_action :set_character, only: [:show, :edit, :update, :destroy, :levelup, :play,
    :manage, :levelup_complete, :retire]


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
  def levelup_complete
    perk = Perk.find character_params[:perk_id]
    perk.applied = perk.applied + 1
    perk.save!
    raise perk.inspect

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
    @character.level = 1

    respond_to do |format|
      if @character.save
        if character_params[:level].to_f > 1
          format.html { redirect_to levelup_character_path @character, level: character_params[:level], notice: 'Character was successfully created.' }
          format.json { render :show, status: :created, location: @character }
        else
          format.html { redirect_to manage_character_path @character, notice: 'Character was successfully created.' }
          format.json { render :show, status: :created, location: @character }
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
        format.html { redirect_to @character, notice: 'Character was successfully updated.' }
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
        :ability_card_id, perks_attributes: [:id, :applied])
    end
end
