class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :author_id, null: false
      t.integer :receiver_id, null: false
      t.text :body, null: false
      t.boolean :read, null: false, default: false

      t.timestamps null: false
    end
    add_index :messages, :author_id
    add_index :messages, :receiver_id
  end
end
