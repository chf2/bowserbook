class ChangeImageUrlName < ActiveRecord::Migration
  def change
    rename_column :users, :imageurl, :image_url
  end
end
