json.extract! comment,
  :id, 
  :author_id,
  :body,
  :post_id
json.author_image_url comment.author.thumbnail_url
json.author_name comment.author.username
json.created_at time_ago_in_words(comment.created_at)