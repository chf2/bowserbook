class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      redirect_to "#/profiles/#{@user.id}"
    else
      flash.now[:danger] = @user.errors.full_messages
      render :new
    end
  end
end