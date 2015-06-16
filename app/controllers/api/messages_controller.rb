class Api::MessagesController < ApplicationController
  before_action :validate_recipient, only: [:show, :update, :destroy]

  def create
    @message = current_user.sent_messages.new(create_message_params)
    @message.read = false
    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def show
    @message = Message.find(params[:id])
  end

  def index
    @messages = current_user.received_messages
  end

  def update
    @message = Message.find(params[:id])
    if @message.update(update_message_params)
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    message = Message.find(params[:id])
    message.destroy
    render json: {}
  end

  private

  def create_message_params
    params.require(:message).permit(:recipient_id, :body)
  end

  def update_message_params
    params.require(:message).permit(:read)
  end

  def validate_recipient
    message = Message.find(params[:id])
    unless current_user.id = message.recipient_id
      render json: {}, status: 422 
    end
  end
end
