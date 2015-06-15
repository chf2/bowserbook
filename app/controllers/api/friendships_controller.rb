class Api::FriendshipsController < ApplicationController
  before_action :validate_current_user, only: [:update]

  def create
    @friendship = Friendship.new(friendship_create_params)
    @friendship.friender_id = current_user.id
    if @friendship.save
      render json: @friendship
    else
      render json: @friendship.errors.full_messages
    end
  end

  def update
    @friendship = Friendship.find(params[:id])
    if @friendship.update(friendship_update_params)
      render json: @friendship
    else
      render json: @friendship.errors.full_messages
    end
  end

  def destroy
    friendship = Friendship.find(params[:id])
    friendship.destroy
    render json: {}
  end

  private

  def friendship_create_params
    params.require(:friendship).permit(:friended_id)
  end

  def friendship_update_params
    params.require(:friendship).permit(:accepted, :responded)
  end

  def validate_current_user
    render json: {} if current_user.id != params[:friendship][:friended_id]
  end
end
