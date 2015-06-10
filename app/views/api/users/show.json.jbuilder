json.extract! @user,
  :id,
  :username, 
  :summary,
  :location, 
  :rival, 
  :interests, 
  :birthday, 
  :image_url, 
  :background_image_url

json.wall_posts @user.wall_posts do |post|
  json.extract! post,
    :id, 
    :author_id, 
    :about_id, 
    :body, 
    :created_at, 
    :updated_at
end