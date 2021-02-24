class Api::V1::BlogsController < ApiController
  before_action :authorize_user, except: [:index, :show]

  # INDEX /blogs
  def index
    render json: Blog.all
  end
  
  

end