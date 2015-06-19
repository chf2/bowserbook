class Api::UsersController < ApplicationController
  before_action :validate_user, only: [:update]

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      Notification.create(
        body: "You updated your profile",
        user_id: current_user.id,
        incoming: false,
        read: false
      )
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def show
    @user = User.where("id = ?", params[:id])
                .includes(posts: [:comments, :author]).first
  end

  def index
    query = params['queryString']
    if query
      results = User.where('UPPER(username) LIKE ?', '%' + query.upcase + '%')
                    .limit(10)
                    .pluck(:id, :username)
      model_objects = []
      results.each do |user_data|
        model_objects << { 'id' => user_data[0], 'username' => user_data[1] }
      end
  # TODO: underscore ##throttle / debounce wait a certain amount of time to fire ajax requests

      render json: model_objects
    end
  end

  private

  def validate_user
    render json: {}, status: 403 unless Integer(params[:id]) == current_user.id
  end

end
