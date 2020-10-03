class AbilityCardsEnhancementsController < ApplicationController
  before_action :set_ability_cards_enhancement, only: [:show, :edit, :update, :destroy]

  # GET /ability_cards_enhancements
  # GET /ability_cards_enhancements.json
  def index
    @ability_cards_enhancements = AbilityCardsEnhancement.all
  end

  # GET /ability_cards_enhancements/1
  # GET /ability_cards_enhancements/1.json
  def show
  end

  # GET /ability_cards_enhancements/new
  def new
    @ability_cards_enhancement = AbilityCardsEnhancement.new
  end

  # GET /ability_cards_enhancements/1/edit
  def edit
  end

  # POST /ability_cards_enhancements
  # POST /ability_cards_enhancements.json
  def create
    @ability_cards_enhancement = AbilityCardsEnhancement.new(ability_cards_enhancement_params)

    respond_to do |format|
      if @ability_cards_enhancement.save
        format.html { redirect_to @ability_cards_enhancement, notice: 'Ability cards enhancement was successfully created.' }
        format.json { render :show, status: :created, location: @ability_cards_enhancement }
      else
        format.html { render :new }
        format.json { render json: @ability_cards_enhancement.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ability_cards_enhancements/1
  # PATCH/PUT /ability_cards_enhancements/1.json
  def update
    respond_to do |format|
      if @ability_cards_enhancement.update(ability_cards_enhancement_params)
        format.html { redirect_to @ability_cards_enhancement, notice: 'Ability cards enhancement was successfully updated.' }
        format.json { render :show, status: :ok, location: @ability_cards_enhancement }
      else
        format.html { render :edit }
        format.json { render json: @ability_cards_enhancement.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ability_cards_enhancements/1
  # DELETE /ability_cards_enhancements/1.json
  def destroy
    @ability_cards_enhancement.destroy
    respond_to do |format|
      format.html { redirect_to ability_cards_enhancements_url, notice: 'Ability cards enhancement was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ability_cards_enhancement
      @ability_cards_enhancement = AbilityCardsEnhancement.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ability_cards_enhancement_params
      params.require(:ability_cards_enhancement).permit(:ability_card_id, :enhancement_id, :is_top)
    end
end
