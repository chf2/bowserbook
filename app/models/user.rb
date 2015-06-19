class User < ActiveRecord::Base
  attr_reader :password
  validates(
    :username, 
    :password_digest, 
    :session_token, 
    presence: true
  )
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, length: { maximum: 16 }
  
  has_many :posts, foreign_key: :author_id, dependent: :destroy
  has_many :wall_posts, class_name: "Post", foreign_key: :about_id
  has_many :comments, foreign_key: :author_id, dependent: :destroy
  has_many :sent_messages, foreign_key: :sender_id, class_name: "Message"
  has_many :received_messages, foreign_key: :recipient_id, class_name: "Message"
  has_many :notifications

  after_initialize :ensure_session_token
  before_save :ensure_public_ids

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def background_image_url
    new_background_public_id = background_public_id.sub(
                                'image/upload/', 
                                'image/upload/t_bbbg/'
                               )
    "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + new_background_public_id
  end

  def ensure_public_ids
    self.profile_public_id ||= 'image/upload/v1434653684/bowserbook_images/default_profile.png'
    self.background_public_id ||= 'image/upload/c_crop,g_south,h_480,w_1280/v1434653683/bowserbook_images/default_background.png'
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
    new_profile_public_id = profile_public_id.sub(
                              'image/upload/', 
                              'image/upload/c_limit,w_150/'
                             )
    "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + new_profile_public_id
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def new_notifications
    notifications.where('incoming = TRUE AND read = FALSE')
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def recent_activity
    notifications.where('incoming = FALSE AND created_at > ?', Time.now - 1.week).all
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def short_username
    username.length <= 11 ? username : username[0..9] + "..."
  end

  def thumbnail_url
    new_profile_public_id = self.profile_public_id.sub(
                              'image/upload/', 
                              'image/upload/t_media_lib_thumb/'
                            )
    "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + new_profile_public_id
  end
end
