class Api::PostsController < ApplicationController
  before_action :require_logged_in
  before_action :require_correct_user, only: [:update, :destroy]

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      if @post.about_id != current_user.id
        Notification.create(
          body: "#{current_user.username} posted on your wall.",
          user_id: @post.about_id,
          incoming: true,
          read: false
        )
        Notification.create(
          body: "You posted on #{@post.about.username}'s wall",
          user_id: current_user.id,
          incoming: false,
          read: false
        )
      end
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index
    if params[:feed]
      @posts = get_feed.all
    else
      @posts = current_user.wall_posts.includes(:author)
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
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

  def get_feed
    friend_ids = current_user.friends.pluck(:id)
    friend_ids << current_user.id
    Post.where(author_id: friend_ids).limit(15)
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
