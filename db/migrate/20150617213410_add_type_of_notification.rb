class AddTypeOfNotification < ActiveRecord::Migration
  def change
    add_column :notifications, :incoming, :boolean, null: false
  end
end
