class ChangeUserImagesFromUrlsToPublicIds < ActiveRecord::Migration
  def change
    add_column :users, :profile_public_id, :string
    add_column :users, :background_public_id, :string
    remove_column :users, :thumbnail_url
    remove_column :users, :image_url
    remove_column :users, :background_image_url
  end
end
