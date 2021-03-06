class Api::CommentsController < ApplicationController
  before_action :require_correct_user, only: [:destroy]

  def create
    @comment = current_user.comments.new(comment_params)
    if @comment.save
      if @comment.post.author_id != current_user.id
        Notification.create(
          body: "#{current_user.username} commented on your post.",
          user_id: @comment.post.author_id,
          incoming: true,
          read: false
        )
      end
      Notification.create(
        body: "You commented on #{@comment.post.author.username}'s post",
        user_id: current_user.id,
        incoming: false,
        read: false
      )
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: {}
  end

  def index
    @comments = current_user.comments
  end

  private

  def comment_params
    params.require(:comment).permit(:post_id, :body)
  end

  def require_correct_user
    comment = Comment.find(params[:id])
    render json: {} unless comment.author_id == current_user.id
  end
end
