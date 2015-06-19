class Api::FriendshipsController < ApplicationController
  before_action :validate_current_user, only: [:update]

  def create
    @friendship = Friendship.new(friendship_create_params)
    @friendship.friender_id = current_user.id
    if @friendship.save
      Notification.create(
        body: "#{current_user.username} sent you a friend request.",
        user_id: @friendship.friended_id,
        incoming: true,
        read: false
      )
      Notification.create(
        body: "You sent #{@friendship.friended.username} a friend request",
        user_id: current_user.id,
        incoming: false,
        read: false
      )
      render json: @friendship
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def update
    @friendship = Friendship.find(params[:id])
    if @friendship.update(friendship_update_params)
      if @friendship.accepted
        Notification.create(
          body: "#{current_user.username} accepted your friend request.",
          user_id: @friendship.friender_id,
          incoming: true,
          read: false
        )
        Notification.create(
          body: "You accepted #{@friendship.friender.username}'s friend request",
          user_id: current_user.id,
          incoming: false,
          read: false
        )
      else
        Notification.create(
          body: "#{current_user.username} declined your friend request.",
          user_id: @friendship.friender_id,
          incoming: true,
          read: false
        )
        Notification.create(
          body: "You declined #{@friendship.friender.username}'s friend request",
          user_id: current_user.id,
          incoming: false,
          read: false
        )
      end
      render :show # TODO: -- show is only used in specific case, not general
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
    friendship = Friendship.find(params[:id])
    friendship.destroy
    render json: {}
  end

  def show
    @friendship = Friendship.find(params[:id])
  end

  private

  def friendship_create_params
    params.require(:friendship).permit(:friended_id)
  end

  def friendship_update_params
    params.require(:friendship).permit(:accepted, :responded)
  end

  def validate_current_user
    friended_id = params[:friendship][:friended_id] 
    render json: {} unless current_user.id == friended_id || friended_id.nil?
  end
end
