class AttackCardsController < ApplicationController
  before_action :set_attack_card, only: [:show, :edit, :update, :destroy]

  # GET /attack_cards
  # GET /attack_cards.json
  def index
    @attack_cards = AttackCard.all
  end

  # GET /attack_cards/1
  # GET /attack_cards/1.json
  def show
  end

  # GET /attack_cards/new
  def new
    @attack_card = AttackCard.new
  end

  # GET /attack_cards/1/edit
  def edit
  end

  # POST /attack_cards
  # POST /attack_cards.json
  def create
    @attack_card = AttackCard.new(attack_card_params)

    respond_to do |format|
      if @attack_card.save
        format.html { redirect_to @attack_card, notice: 'Attack card was successfully created.' }
        format.json { render :show, status: :created, location: @attack_card }
      else
        format.html { render :new }
        format.json { render json: @attack_card.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /attack_cards/1
  # PATCH/PUT /attack_cards/1.json
  def update
    respond_to do |format|
      if @attack_card.update(attack_card_params)
        format.html { redirect_to @attack_card, notice: 'Attack card was successfully updated.' }
        format.json { render :show, status: :ok, location: @attack_card }
      else
        format.html { render :edit }
        format.json { render json: @attack_card.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /attack_cards/1
  # DELETE /attack_cards/1.json
  def destroy
    @attack_card.destroy
    respond_to do |format|
      format.html { redirect_to attack_cards_url, notice: 'Attack card was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_attack_card
      @attack_card = AttackCard.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def attack_card_params
      params.require(:attack_card).permit(:name, :image, :value, :reshuffle, :character_class_id, :count)
    end
end
