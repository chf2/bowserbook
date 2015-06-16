class Message < ActiveRecord::Base
  validates :sender, :recipient, :body, :read, presence: true

  belongs_to :sender, class_name: "User"
  belongs_to :recipient, class_name: "User"
end
