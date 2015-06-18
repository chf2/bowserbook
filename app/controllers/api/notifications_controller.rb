class Api::NotificationsController < ApplicationController
  before_action :validate_user, only: [:update, :destroy, :show]

  def create
    @notification = Notification.new(notification_params)
    @notification.read = false
    if @notification.save
      render :show
    else
      render json: @notification.errors.full_messages, status: 422
    end
  end

  def show
    @notification = Notification.find(params[:id])
  end

  def index
    @notifications = current_user.new_notifications.all
  end

  def update
    @notification = Notification.find(params[:id])
    if @notification.update(notification_params)
      render :show
    else
      render json: @notification.errors.full_messages, status: 422
    end
  end

  def destroy
    notification = Notification.find(params[:id])
    notification.destroy
    render json: {}
  end

  private 

  def notification_params
    params.require(:notification).permit(:body, :read, :incoming, :user_id)
  end

  def validate_user
    notification = Notification.find(params[:id])
    render json: {}, status: 403 unless notification.user_id == current_user.id
  end
end