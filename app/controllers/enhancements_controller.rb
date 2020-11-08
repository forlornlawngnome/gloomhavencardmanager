class EnhancementsController < ApplicationController
  before_action :set_enhancement, only: [:show, :edit, :update, :destroy]

  # GET /enhancements
  # GET /enhancements.json
  def index
    @enhancements = Enhancement.all
  end

  # GET /enhancements/1
  # GET /enhancements/1.json
  def show
  end

  # GET /enhancements/new
  def new
    @enhancement = Enhancement.new
  end

  # GET /enhancements/1/edit
  def edit
  end

  # POST /enhancements
  # POST /enhancements.json
  def create
    @enhancement = Enhancement.new(enhancement_params)

    respond_to do |format|
      if @enhancement.save
        format.html { redirect_to @enhancement, notice: 'Enhancement was successfully created.' }
        format.json { render :show, status: :created, location: @enhancement }
      else
        format.html { render :new }
        format.json { render json: @enhancement.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /enhancements/1
  # PATCH/PUT /enhancements/1.json
  def update
    respond_to do |format|
      if @enhancement.update(enhancement_params)
        format.html { redirect_to @enhancement, notice: 'Enhancement was successfully updated.' }
        format.json { render :show, status: :ok, location: @enhancement }
      else
        format.html { render :edit }
        format.json { render json: @enhancement.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /enhancements/1
  # DELETE /enhancements/1.json
  def destroy
    @enhancement.destroy
    respond_to do |format|
      format.html { redirect_to enhancements_url, notice: 'Enhancement was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_enhancement
      @enhancement = Enhancement.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def enhancement_params
      params.require(:enhancement).permit(:description, :cost)
    end
end
