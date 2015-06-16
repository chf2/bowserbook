class User < ActiveRecord::Base
  attr_reader :password
  validates(
    :username, 
    :password_digest, 
    :session_token, 
    presence: true
  )
  validates :password, length: { minimum: 6, allow_nil: true }
  
  has_many :posts, foreign_key: :author_id, dependent: :destroy
  has_many :wall_posts, class_name: "Post", foreign_key: :about_id
  has_many :comments, foreign_key: :author_id, dependent: :destroy
  has_many :sent_messages, foreign_key: :sender_id, class_name: "Message"
  has_many :received_messages, foreign_key: :recipient_id, class_name: "Message"

  after_initialize :ensure_session_token, :ensure_image_url

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def background_image_url
    return "" unless self.background_public_id
    new_background_public_id = background_public_id.sub(
                      '/image/upload/', 
                      '/image/upload/t_bg'
                     )
    "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + new_background_public_id
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def friend_requests_in
    Friendship.where('friended_id = ? AND responded = FALSE', self.id).all
  end

  def friend_requests_out
    Friendship.where('friender_id = ? AND responded = FALSE', self.id).all
  end

  def friends
    user_ids = Friendship.where(
      '(friended_id = :id OR friender_id = :id) AND accepted = TRUE',
       id: self.id
    ).pluck(:friended_id, :friender_id)
     .flatten
     .uniq
     .reject { |id| id == self.id }

    User.where(id: user_ids)
  end

  def image_url
    return "" unless self.profile_public_id
    new_profile_public_id = profile_public_id.sub(
                      '/image/upload/', 
                      '/image/upload/c_limit,w_150'
                     )
    "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + new_profile_public_id
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def ensure_image_url
    self.image_url ||= '/assets/default_img.png'
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def thumbnail_url
    return "" unless self.profile_public_id
    new_profile_public_id = self.profile_public_id.sub(
                      '/image/upload/', 
                      '/image/upload/t_media_lib_thumb'
                     )
    "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + new_profile_public_id
  end
end
