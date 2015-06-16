json.extract! message, :id, :sender_id, :recipient_id, :body, :read
json.time_sent time_ago_in_words(message.created_at)
json.sender_image_url message.sender.image_url
json.sender_username message.sender.username