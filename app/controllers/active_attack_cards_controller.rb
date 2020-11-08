class ActiveAttackCardsController < ApplicationController
  before_action :set_active_attack_card, only: [:show, :edit, :update, :destroy]

  # GET /active_attack_cards
  # GET /active_attack_cards.json
  def index
    @active_attack_cards = ActiveAttackCard.all
  end

  # GET /active_attack_cards/1
  # GET /active_attack_cards/1.json
  def show
  end

  # GET /active_attack_cards/new
  def new
    @active_attack_card = ActiveAttackCard.new
  end

  # GET /active_attack_cards/1/edit
  def edit
  end

  # POST /active_attack_cards
  # POST /active_attack_cards.json
  def create
    @active_attack_card = ActiveAttackCard.new(active_attack_card_params)

    respond_to do |format|
      if @active_attack_card.save
        format.html { redirect_to @active_attack_card, notice: 'Active attack card was successfully created.' }
        format.json { render :show, status: :created, location: @active_attack_card }
      else
        format.html { render :new }
        format.json { render json: @active_attack_card.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /active_attack_cards/1
  # PATCH/PUT /active_attack_cards/1.json
  def update
    respond_to do |format|
      if @active_attack_card.update(active_attack_card_params)
        format.html { redirect_to @active_attack_card, notice: 'Active attack card was successfully updated.' }
        format.json { render :show, status: :ok, location: @active_attack_card }
      else
        format.html { render :edit }
        format.json { render json: @active_attack_card.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /active_attack_cards/1
  # DELETE /active_attack_cards/1.json
  def destroy
    @active_attack_card.destroy
    respond_to do |format|
      format.html { redirect_to active_attack_cards_url, notice: 'Active attack card was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_active_attack_card
      @active_attack_card = ActiveAttackCard.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def active_attack_card_params
      params.require(:active_attack_card).permit(:attack_card_id, :character_id, :is_drawn)
    end
end
