class ChangeSentMessagesName < ActiveRecord::Migration
  def change
    rename_column :messages, :author_id, :sender_id
    rename_column :messages, :receiver_id, :recipient_id 
  end
end
