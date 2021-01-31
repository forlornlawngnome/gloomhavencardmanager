class PartiesController < ApplicationController
  before_action :set_party, only: [:show, :edit, :update, :destroy, :manage, :add_prosperity, :remove_prosperity, :add_reputation, :remove_reputation]
  skip_before_action :authorized, only: [:create, :selected, :party_select]


  def manage
    @unlockable_items = Item.where(is_unlocked: false).select('distinct on (number) *').order(:number)
  end
  def add_prosperity
    if @party.prosperity_actual < 9.0
      @party.prosperity = @party.prosperity + 1
      @party.save
      if @party.prosperity_bottom
        range_bot = Item.prosperityItem(@party.prosperity_actual - 1)
        range_top = Item.prosperityItem(@party.prosperity_actual)
        items = Item.where("number > ? AND number <= ?", range_bot, range_top)
        items.update_all(is_unlocked: true)
        locked_items = Item.where(is_unlocked: false)
        locked_items.update_all(character_id: nil) #If the item is locked, it should have no owner
        #make items available
      end
      redirect_to manage_party_path @party
      return
    end
    redirect_to manage_party_path @party
  end
  def add_reputation
    @party.reputation += 1
    @party.save
    redirect_to manage_party_path @party
  end
  def remove_prosperity
    if !@party.prosperity_bottom
      @party.prosperity = @party.prosperity - 1
      @party.save
      redirect_to manage_party_path @party
    else
      redirect_to manage_party_path @party
    end
  end
  def remove_reputation
    @party.reputation -= 1
    @party.save
    redirect_to manage_party_path @party
  end
  # GET /parties
  # GET /parties.json
  def index
    @parties = Party.all
  end

  # GET /parties/1
  # GET /parties/1.json
  def show
  end

  # GET /parties/new
  def new
    @party = Party.new
    @party.players_parties.build
  end

  # GET /parties/1/edit
  def edit
  end

  def party_select
  end
  def selected
    party = Party.find_by id:  params[:party_id]
    session[:party_id] = party.id

    redirect_to root_path
    return
  end

  # POST /parties
  # POST /parties.json
  def create
    @party = Party.new(party_params)

    respond_to do |format|
      if @party.save
        session[:party_id] = @party.id
        format.html { redirect_to @party, notice: 'Party was successfully created.' }
        format.json { render :show, status: :created, location: @party }
      else
        format.html { render :new }
        format.json { render json: @party.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /parties/1
  # PATCH/PUT /parties/1.json
  def update
    respond_to do |format|
      if @party.update(party_params)
        format.html { redirect_to @party, notice: 'Party was successfully updated.' }
        format.json { render :show, status: :ok, location: @party }
      else
        format.html { render :edit }
        format.json { render json: @party.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /parties/1
  # DELETE /parties/1.json
  def destroy
    @party.destroy
    respond_to do |format|
      format.html { redirect_to parties_url, notice: 'Party was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_party
      @party = Party.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def party_params
      params.require(:party).permit(:name, :reputation, :prosperity, players_parties_attributes: [:player_id])
    end
end
