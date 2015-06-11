class User < ActiveRecord::Base
  attr_reader :password
  validates(
    :username, 
    :password_digest, 
    :session_token, 
    :image_url, 
    presence: true
  )
  validates :password, length: { minimum: 6, allow_nil: true }
  
  has_many :posts, foreign_key: :author_id
  has_many :wall_posts, class_name: "Post", foreign_key: :about_id
  has_many :comments, foreign_key: :author_id

  after_initialize :ensure_session_token, :ensure_image_url

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
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
end
