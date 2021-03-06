class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user = User.find_by(session_token: session[:session_token])
  end

  def log_in(user)
    session[:session_token] = user.reset_session_token!
  end

  def log_out
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    redirect_to login_url unless logged_in?
  end

  private 

  def user_params
    params.require(:user).permit(
      :username, 
      :password,
      :summary, 
      :location, 
      :rival,
      :interests,
      :birthday,
      :profile_public_id,
      :background_public_id,
      :status
    )
  end
end
