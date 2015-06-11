class Api::PostsController < ApplicationController
  before_action :require_logged_in
  before_action :require_correct_user, only: [:update, :destroy]

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index
    @posts = current_user.wall_posts.includes(:author)
  end

  def update
    @post = Post.find(params[:id])
    if @post.update
      render :show
    else
      render json: @post.errors.full_messages, status: 422
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

  def require_correct_user
    post = Post.find(params[:id])
    render json: {} unless post.author_id == current_user.id
  end
end
