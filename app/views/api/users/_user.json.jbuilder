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

json.is_a_friend !!current_user.friends.include?(user)

json.request_sent !!current_user
                    .friend_requests_out
                    .map { |fr| fr.friended_id }
                    .include?(user.id)

if current_user.friend_requests_in.map { |fr| fr.friender_id }.include?(user.id)
  json.request_received true
  json.request_received_id current_user.friend_requests_in
    .select { |fr| fr.friender_id == user.id }.first.id
else
  json.request_received false
end
                        
json.wall_posts user.wall_posts do |post|
  json.partial! 'api/posts/post', post: post
end

if current_user.id == user.id
  json.friend_requests_in user.friend_requests_in do |friend_request|
    json.partial! 'api/friendships/friendship', friend_request: friend_request
  end
end

json.friends user.friends.all do |friend|
  json.id friend.id
  json.username friend.username
  json.image_url friend.image_url
  json.status friend.status
end