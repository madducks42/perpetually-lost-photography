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

  # CREATE /blogs/new
  def create
    post = Blog.new(post_params)
    post.user = current_user

    if post.save
      render json: post
    else
      render json: { errors: post.errors.full_messages }
    end 

  end

  def update
    post = Blog.find(params[:id])

    if post.update(post_params)
      render json: post
    else
      render json: { errors: post.errors.full_messages }
    end
  end

  def destroy
    post = Blog.find(params[:id])
  
    if post.destroy
      render json: {destroyed: true}
    end
    
  end
  
  protected

  def post_params
    params.require(:blog).permit([:title, :caption, :body, :image, :category])
  end

  def authorize_user
    if !user_signed_in? || current_user.role != "admin"
      redirect_to root_path
    end
  end

end