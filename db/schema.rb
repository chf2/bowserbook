# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150617213410) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "post_id",    null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["author_id"], name: "index_comments_on_author_id", using: :btree
  add_index "comments", ["post_id"], name: "index_comments_on_post_id", using: :btree

  create_table "friendships", force: :cascade do |t|
    t.integer  "friender_id",                 null: false
    t.integer  "friended_id",                 null: false
    t.boolean  "accepted"
    t.boolean  "responded",   default: false, null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_index "friendships", ["friended_id"], name: "index_friendships_on_friended_id", using: :btree
  add_index "friendships", ["friender_id"], name: "index_friendships_on_friender_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.integer  "sender_id",                    null: false
    t.integer  "recipient_id",                 null: false
    t.text     "body",                         null: false
    t.boolean  "read",         default: false, null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  add_index "messages", ["recipient_id"], name: "index_messages_on_recipient_id", using: :btree
  add_index "messages", ["sender_id"], name: "index_messages_on_sender_id", using: :btree

  create_table "notifications", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "body",       null: false
    t.boolean  "read"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean  "incoming",   null: false
  end

  add_index "notifications", ["user_id"], name: "index_notifications_on_user_id", using: :btree

  create_table "posts", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "about_id",   null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "posts", ["about_id"], name: "index_posts_on_about_id", using: :btree
  add_index "posts", ["author_id"], name: "index_posts_on_author_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",             null: false
    t.string   "password_digest",      null: false
    t.string   "session_token",        null: false
    t.string   "location"
    t.string   "rival"
    t.string   "interests"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.date     "birthday"
    t.text     "summary"
    t.string   "status"
    t.string   "profile_public_id"
    t.string   "background_public_id"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
