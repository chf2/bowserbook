json.extract! notification, :id, :user_id, :body, :read, :incoming
json.occurred time_ago_in_words(notification.created_at)