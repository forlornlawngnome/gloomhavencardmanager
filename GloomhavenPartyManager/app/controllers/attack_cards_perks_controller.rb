class AttackCardsPerksController < ApplicationController
  before_action :set_attack_cards_perk, only: [:show, :edit, :update, :destroy]

  # GET /attack_cards_perks
  # GET /attack_cards_perks.json
  def index
    @attack_cards_perks = AttackCardsPerk.all
  end

  # GET /attack_cards_perks/1
  # GET /attack_cards_perks/1.json
  def show
  end

  # GET /attack_cards_perks/new
  def new
    @attack_cards_perk = AttackCardsPerk.new
  end

  # GET /attack_cards_perks/1/edit
  def edit
  end

  # POST /attack_cards_perks
  # POST /attack_cards_perks.json
  def create
    @attack_cards_perk = AttackCardsPerk.new(attack_cards_perk_params)

    respond_to do |format|
      if @attack_cards_perk.save
        format.html { redirect_to @attack_cards_perk, notice: 'Attack cards perk was successfully created.' }
        format.json { render :show, status: :created, location: @attack_cards_perk }
      else
        format.html { render :new }
        format.json { render json: @attack_cards_perk.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /attack_cards_perks/1
  # PATCH/PUT /attack_cards_perks/1.json
  def update
    respond_to do |format|
      if @attack_cards_perk.update(attack_cards_perk_params)
        format.html { redirect_to @attack_cards_perk, notice: 'Attack cards perk was successfully updated.' }
        format.json { render :show, status: :ok, location: @attack_cards_perk }
      else
        format.html { render :edit }
        format.json { render json: @attack_cards_perk.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /attack_cards_perks/1
  # DELETE /attack_cards_perks/1.json
  def destroy
    @attack_cards_perk.destroy
    respond_to do |format|
      format.html { redirect_to attack_cards_perks_url, notice: 'Attack cards perk was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_attack_cards_perk
      @attack_cards_perk = AttackCardsPerk.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def attack_cards_perk_params
      params.require(:attack_cards_perk).permit(:attack_card_id, :perk_id)
    end
end
