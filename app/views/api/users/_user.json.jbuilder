json.extract! user,
  :id,
  :background_image_url,
  :birthday, 
  :image_url, 
  :interests, 
  :location, 
  :rival,
  :status,
  :summary,
  :thumbnail_url,
  :username

json.wall_posts user.wall_posts do |post|
  json.partial! 'api/posts/post', post: post
end