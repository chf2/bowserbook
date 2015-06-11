json.extract! post,
  :id, 
  :about_id, 
  :author_id,
  :body
json.author_image_url post.author.image_url
json.author_name post.author.username
json.created_at time_ago_in_words(post.created_at)