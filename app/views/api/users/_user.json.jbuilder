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

json.friend_requests_in do |friend_request|
  json.friend_request_id friend_request.id
  json.friender friend_request.friender_id
  json.friender_username friend_request.friender.username
  json.friender_thumbnail_url friend_request.friender.thumbnail_url
end

json.friends do |friend|
  json.id friend.id
  json.username friend.username
  json.image_url friend.image_url
  json.status friend.status
end