class Comment < ActiveRecord::Base
  validates :author, :post, :body, presence: true
  validates :body, length: { maximum: 255 }

  belongs_to :author, class_name: "User"
  belongs_to :post
end
