class Message < ActiveRecord::Base
  validates :sender, :recipient, :body, presence: true

  belongs_to :sender, class_name: "User"
  belongs_to :recipient, class_name: "User"

  def preview
    body.length <= 17 ? body : body[0..16] + "..."
  end
end
