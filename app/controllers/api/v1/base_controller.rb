class Api::V1::BaseController < ApplicationController

respond_to :json

# private

  # -- improve and use later to format errors better
  # def render_error(message, status)
  #   render json: {error: message}, status: status
  # end

end
