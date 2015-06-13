class FriendshipsController < ApplicationController
  def create
    @friendship = Friendship.new(friendship_params)
    if @friendship.save
      render json: @friendship
    else
      render json: @friendship.errors.full_messages
    end
  end

  def update
    @friendship = Friendship.find(params[:id])
    @friendship.responded = true # TODO: Issues if failure?
    if @friendship.update(friendship_params)
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
end
