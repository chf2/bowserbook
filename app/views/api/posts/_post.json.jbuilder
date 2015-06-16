json.extract! post,
  :id, 
  :about_id, 
  :author_id,
  :body
json.author_image_url post.author.thumbnail_url
json.author_name post.author.username
json.about_name post.about.username
json.created_at time_ago_in_words(post.created_at)
json.comments post.comments do |comment|
  json.partial! 'api/comments/comment', comment: comment
end