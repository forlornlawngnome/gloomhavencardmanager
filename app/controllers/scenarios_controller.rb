class ScenariosController < ApplicationController
  before_action :set_scenario, only: [:show, :edit, :update, :destroy, :play, :reset_characters, :start,
    :create_first_round, :finish_scenario, :next_round]

  def play
  end
  def start
  end
  def create_first_round
    @scenario.rounds.build(number: 1)
    @scenario.save
    redirect_to play_scenario_path @scenario
  end
  def next_round
    prev_round = @scenario.current_round.number
    @scenario.rounds.build(number: (prev_round+1))
    @scenario.save
    redirect_to play_scenario_path @scenario
  end
  def finish_scenario
    @scenario.active = false
    @scenario.save
    redirect_to root_url
  end
  def reset_characters
    @scenario.initialize_characters

  end
  # GET /scenarios
  # GET /scenarios.json
  def index
    @scenarios = Scenario.all
  end

  # GET /scenarios/1
  # GET /scenarios/1.json
  def show
  end

  # GET /scenarios/new
  def new
    @scenario = Scenario.new
  end

  # GET /scenarios/1/edit
  def edit
  end

  # POST /scenarios
  # POST /scenarios.json
  def create
    @scenario = Scenario.new(scenario_params)

    respond_to do |format|
      if @scenario.save
        format.html { redirect_to play_scenario_path @scenario, notice: 'Scenario was successfully created.' }
        format.json { render :show, status: :created, location: @scenario }
      else
        format.html { render :new }
        format.json { render json: @scenario.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /scenarios/1
  # PATCH/PUT /scenarios/1.json
  def update
    respond_to do |format|
      if @scenario.update(scenario_params)
        format.html { redirect_to @scenario, notice: 'Scenario was successfully updated.' }
        format.json { render :show, status: :ok, location: @scenario }
      else
        format.html { render :edit }
        format.json { render json: @scenario.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /scenarios/1
  # DELETE /scenarios/1.json
  def destroy
    @scenario.destroy
    respond_to do |format|
      format.html { redirect_to scenarios_url, notice: 'Scenario was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_scenario
      @scenario = Scenario.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def scenario_params
      params.require(:scenario).permit(:name, :number, :party_id, :active, character_ids: [])
    end
end
