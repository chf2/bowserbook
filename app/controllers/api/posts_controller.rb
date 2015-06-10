class PostsController < ApplicationController
  before_action :require_logged_in

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      render :json @post
    else
      render :json @post.errors.full_messages
    end
  end

  def index
    @posts = current_user.wall_posts
  end

  def update
    @post = Post.find(params[:id])
    if @post.update
      render :json @post
    else
      render :json @post.errors.full_messages
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    render json: post
  end


  private

  def post_params
    params.require(:post).permit(:about_id, :body)
  end
end
