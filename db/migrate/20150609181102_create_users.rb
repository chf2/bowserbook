class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :location
      t.string :rival
      t.string :interests
      t.datetime :birthday
      t.string :imageurl, null: false, default: '/assets/default_img.png'

      t.timestamps null: false
    end
    
    add_index :users, :username, unique: true
  end
end