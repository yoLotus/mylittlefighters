class FightsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @fights = Fight.all
  end

  def create
    render json: Fight.new(pretendors: fight_params[:pretendors].map{ |p| Character.find(p)}).run
  end

  private

  def fight_params
    params.require(:fight).permit(pretendors: [])
  end
end
