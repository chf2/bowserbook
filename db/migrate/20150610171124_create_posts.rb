class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.integer :about_id, null: false
      t.text :body, null: false

      t.timestamps null: false
    end

    add_index :posts, :author_id
    add_index :posts, :about_id
  end
end
