class AbilityCardsController < ApplicationController
  before_action :set_ability_card, only: [:show, :edit, :update, :destroy]

  # GET /ability_cards
  # GET /ability_cards.json
  def index
    @ability_cards = AbilityCard.all
  end

  # GET /ability_cards/1
  # GET /ability_cards/1.json
  def show
  end

  # GET /ability_cards/new
  def new
    @ability_card = AbilityCard.new
  end

  # GET /ability_cards/1/edit
  def edit
  end

  # POST /ability_cards
  # POST /ability_cards.json
  def create
    @ability_card = AbilityCard.new(ability_card_params)

    respond_to do |format|
      if @ability_card.save
        format.html { redirect_to @ability_card, notice: 'Ability card was successfully created.' }
        format.json { render :show, status: :created, location: @ability_card }
      else
        format.html { render :new }
        format.json { render json: @ability_card.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ability_cards/1
  # PATCH/PUT /ability_cards/1.json
  def update
    respond_to do |format|
      if @ability_card.update(ability_card_params)
        format.html { redirect_to @ability_card, notice: 'Ability card was successfully updated.' }
        format.json { render :show, status: :ok, location: @ability_card }
      else
        format.html { render :edit }
        format.json { render json: @ability_card.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ability_cards/1
  # DELETE /ability_cards/1.json
  def destroy
    @ability_card.destroy
    respond_to do |format|
      format.html { redirect_to ability_cards_url, notice: 'Ability card was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ability_card
      @ability_card = AbilityCard.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ability_card_params
      params.require(:ability_card).permit(:name, :initiative, :level, :image, :character_class_id, :active, :counter, :max_counter, :status, :available, :chosen)
    end
end
