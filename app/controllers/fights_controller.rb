# frozen_string_literal: true

class FightsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @fights = Fight.all
  end

  def create
    fight = FightService.new(*fight_params[:pretendors]).run
    render json: fight
  end

  private

  def fight_params
    params.require(:fight).permit(pretendors: [])
  end
end
