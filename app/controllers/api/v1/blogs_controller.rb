class Api::V1::BlogsController < ApiController
  before_action :authorize_user, except: [:index, :show]

  # INDEX /blogs
  def index
    render json: Blog.all, each_serializer: BlogSerializer
  end

  # SHOW /blogs/1
  def show
    render json: Blog.find(params[:id]), serializer: BlogShowSerializer
  end
  
  

end