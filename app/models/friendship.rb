class Friendship < ActiveRecord::Base
  validates :friender, :friended, presence: true

  belongs_to :friender, class_name: "User"
  belongs_to :friended, class_name: "User"
end
