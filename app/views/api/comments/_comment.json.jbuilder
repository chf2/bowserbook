json.extract! comment,
  :id, 
  :author_id,
  :body,
  :post_id:
json.author_image_url post.author.image_url
json.author_name post.author.username
json.created_at time_ago_in_words(post.created_at)