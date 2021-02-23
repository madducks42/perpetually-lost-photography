class Api::V1::BlogsController < ApiController

  # INDEX /blogs
  def index
    render json: Blog.all
  end
  
  

end