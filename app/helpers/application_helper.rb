require 'digest/sha1'
require 'json'

module ApplicationHelper
  def auth_token
    html = "<input type='hidden'" 
    html += " name='authenticity_token'"
    html += " value='#{form_authenticity_token}'>"
    html.html_safe
  end

  def cloudinary_json
    api_key = ENV['CLOUD_API_KEY']
    api_secret = ENV['CLOUD_API_SECRET']
    timestamp = Time.now.to_i
    upload_preset = ENV['UPLOAD_PRESET']
    signature_str = "timestamp=" + timestamp.to_s + "&upload_preset=" + upload_preset + api_secret
    signature = Digest::SHA1.hexdigest(signature_str)
    json = JSON.generate(
        { "api_key" => api_key,
          "upload_preset" => upload_preset,
          "timestamp" => timestamp, 
          "signature" => signature 
        }
      )
    json
  end
end
