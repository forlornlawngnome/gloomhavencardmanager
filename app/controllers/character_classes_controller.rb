class CharacterClassesController < ApplicationController
  before_action :set_character_class, only: [:show, :edit, :update, :destroy, ]

  def unlock
    @character_classes = CharacterClass.find(params["character_classes"]["id"])
    @character_classes.is_locked = false
    @party = params["character_classes"]["party_id"]
    if @character_classes.save
      redirect_to manage_party_path @party, notice: 'Class successfully unlocked.'
    else
      render manage_party_path @party, notice: "Failed to unlock class."
    end
  end
  # GET /character_classes
  # GET /character_classes.json
  def index
    @character_classes = CharacterClass.all
  end

  # GET /character_classes/1
  # GET /character_classes/1.json
  def show
  end

  # GET /character_classes/new
  def new
    @character_class = CharacterClass.new
  end

  # GET /character_classes/1/edit
  def edit
  end

  # POST /character_classes
  # POST /character_classes.json
  def create
    @character_class = CharacterClass.new(character_class_params)

    respond_to do |format|
      if @character_class.save
        format.html { redirect_to @character_class, notice: 'Character class was successfully created.' }
        format.json { render :show, status: :created, location: @character_class }
      else
        format.html { render :new }
        format.json { render json: @character_class.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /character_classes/1
  # PATCH/PUT /character_classes/1.json
  def update
    respond_to do |format|
      if @character_class.update(character_class_params)
        format.html { redirect_to @character_class, notice: 'Character class was successfully updated.' }
        format.json { render :show, status: :ok, location: @character_class }
      else
        format.html { render :edit }
        format.json { render json: @character_class.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /character_classes/1
  # DELETE /character_classes/1.json
  def destroy
    @character_class.destroy
    respond_to do |format|
      format.html { redirect_to character_classes_url, notice: 'Character class was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character_class
      @character_class = CharacterClass.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def character_class_params
      params.require(:character_class).permit(:name, :nickname, :hand_size, :symbol, :image, :character_abbreviation, :card_back, :icon_image, :plaque, :health, :is_locked)
    end
end
