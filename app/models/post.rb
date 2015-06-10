class Post < ActiveRecord::Base
  validates :author, :about, :body, presence: true
  validates :body, length: { maximum: 255 }

  belongs_to :author, class_name: "User"
  belongs_to :about, class_name: "User"
end
