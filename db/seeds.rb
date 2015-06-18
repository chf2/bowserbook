# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(
  username: "Mario",
  password: "password",
  location: "<Secret Rescue Mission>",
  rival: "Bowser",
  interests: "Plubming, fireballs, red shells, mushrooms",
  birthday: Time.now - 35.years - 3.months,
  summary: "I'm Mario. I've been saving princesses since I was born. This should have been called MarioBook!",
  status: "Feeling pretty good about finding that next star today!",
  profile_public_id: "image/upload/v1434157467/bowserbook_images/c18ydlivlu3ju6pggjmx.png#20f372ee3cb3cedf1380a584e5e90289cb2ac257",
  background_public_id: "image/upload/v1434219755/bowserbook_images/vian5na20nvidqrmpejy.png#9a2852194f4c040da9e92d76e4d9c41468244164"
)

Post.create!(author_id: 1, about_id: 1, body: "Feeling pretty good about finding that next star today!")

User.create!(
  username: "Luigi",
  password: "luigipassword",
  location: "Luigi's Mansion",
  rival: "Waluigi",
  interests: "Winning contests, flaming uppercuts, green shells",
  birthday: Time.now - 32.years,
  summary: "Everyone always talks about Mario, but I can beat him any day!",
  status: "Going with green today.",
  profile_public_id: "image/upload/v1434662720/bowserbook_images/luigi_profile.png"
  background_public_id: "image/upload/v1434219755/bowserbook_images/luigi_bg.png"
)

Post.create!(author_id: 2, about_id: 2, body: "Going with green today.")

User.create!(
  username: "Bowser",
  password: "password",
  location: "Princess Peach's Castle",
  rival: "Mario",
  interests: "Stealing things, being bad, breathing fire, raising Bowser Jr.",
  birthday: Time.now - 30.years - 6.months,
  summary: "I am Bowser, and I am the best. This website was named after me for a reason!",
  status: "Plotting my next move...",
  profile_public_id: "image/upload/v1434219865/bowserbook_images/a9tim5clwljp89lt92cm.png#034a03a1d9b9b35b75ee79f2652a93aaf4144b2f",
  background_public_id: "image/upload/v1434219873/bowserbook_images/evtmilo2dk039dvekt0c.png"
)

Post.create!(author_id: 3, about_id: 3, body: "Plotting my next move...")

User.create!(
  username: "Peach",
  password: "peachpassword",
  location: "My Castle",
  rival: "Bowser",
  interests: "Getting captured, apparently",
  birthday: Time.now - 30.years,
  summary: "I own most of the real estate in the Mario universe.",
  status: "Help!",
  profile_public_id: "image/upload/v1434219979/bowserbook_images/milsrrrjhapyxahuyqyl.png#41da5d2137be29beae3599f2aa0b8589722b9afa",
  background_public_id: "image/upload/v1434219942/bowserbook_images/uk9gc8uv4qj2gefkqtmd.png#088d1fca1c6907c947116649f0807aa001af7e52"
)

Post.create!(author_id: 4, about_id: 4, body: "Help!")

User.create!(
  username: "Yoshi",
  password: "yoshipassword",
  location: "Yoshi's Island",
  rival: "Goombas and Koopas",
  interests: "Laying eggs, eating things",
  birthday: Time.now - 25.years,
  summary: "Excellent racer. Mario's favorite companion. Koopas and Goombas, look out!",
  status: "Pop!",
  profile_public_id: "image/upload/v1434219979/bowserbook_images/yoshi_profile.png",
  background_public_id: "image/upload/v1434219942/bowserbook_images/yoshi_bg.png"
)

Post.create!(author_id: 5, about_id: 5, body: "Pop!")

User.create!(
  username: "Toad",
  password: "toadpassword",
  location: "Mushroom Kingdom",
  rival: "Any enemy of the Mushroom Kingdom",
  interests: "Mushroom hats, helping my friends",
  birthday: Time.now - 30.years,
  summary: "A loyal citizen of the Mushroom Kingdom, I'm always on the lookout for trouble.",
  status: "Someone help! The princess has been captured by Bowser!",
  profile_public_id: "image/upload/v1434219979/bowserbook_images/toad_profile.png",
  background_public_id: "image/upload/v1434219942/bowserbook_images/toad_bg.png"
)

Post.create!(author_id: 6, about_id: 6, body: "Someone help! The princess has been captured by Bowser!")

User.create!(
  username: "Wario",
  password: "wariopassword",
  location: "Wario's Stadium",
  rival: "Mario",
  interests: "BOMBS",
  birthday: Time.now - 23.years,
  summary: "Don't mess with Wario. BOOM.",
  status: "BOOM!!",
  profile_public_id: "image/upload/v1434219979/bowserbook_images/wario_profile.png",
  background_public_id: "image/upload/v1434219942/bowserbook_images/wario_bg.png"
)

Post.create!(author_id: 7, about_id: 7, body: "BOOM!!")

User.create!(
  username: "Waluigi",
  password: "waluigipassword",
  location: "The courts",
  rival: "Luigi",
  interests: "Doubles tennis, dancing",
  birthday: Time.now - 15.years,
  summary: "I love winning at tennis, winning at dancing, and winning.",
  status: "Deuce",
  profile_public_id: "image/upload/v1434219979/bowserbook_images/waluigi_profile.png",
  background_public_id: "image/upload/c_crop,h_1200,w_3200,y_100/v1434219942/bowserbook_images/waluigi_bg.png"
)

Post.create!(author_id: 8, about_id: 8, body: "Deuce")

User.create!(
  username: "Baby Bowser",
  password: "babybowserpassword",
  location: "Yoshi's Island",
  rival: "Baby Mario",
  interests: "Being bad",
  birthday: Time.now - 2.years,
  summary: "ROAR",
  status: "ROAR",
  profile_public_id: "image/upload/v1434219979/bowserbook_images/babybowser_profile.png",
  background_public_id: "image/upload/v1434219942/bowserbook_images/babybowser_bg.png"
)

Post.create!(author_id: 9, about_id: 9, body: "ROAR")

User.create!(
  username: "Baby Mario",
  password: "babymariopassword",
  location: "Yoshi's Island",
  rival: "Baby Bowser",
  interests: "Sleeping, crying, saving the world",
  birthday: Time.now - 2.years,
  summary: "Waaaaaahhhhhhh!! Waaaaaaahhhhhhh!!",
  status: "Waaaaaahhhhhhh!!",
  profile_public_id: "image/upload/v1434654119/bowserbook_images/b8wu2pztg21tsrmt6367.png"
  background_public_id: "image/upload/v1434654126/bowserbook_images/jply4re3o6uznhkneoil.png"
)

Post.create!(author_id: 10, about_id: 10, body: "Waaaaaahhhhhhh!!")

User.create!(
  username: "King Boo",
  password: "kingboopassword",
  location: "Luigi's Mansion",
  rival: "Mario, Luigi, anyone who looks at me...",
  interests: "Scaring people",
  birthday: Time.now - 14.years,
  summary: "King of all Boo. Contest winners beware!",
  status: "BOO",
  profile_public_id: "image/upload/v1434219979/bowserbook_images/boo_profile.png",
  background_public_id: "image/upload/v1434662719/bowserbook_images/boo_background.png"
)

Post.create!(author_id: 11, about_id: 11, body: "BOO")

User.create!(
  username: "Charles",
  password: "charlespassword",
  location: "App Academy",
  rival: "Vertically aligning text",
  interests: "JavaScript, Backbone, Ruby, Rails, Venti Iced Coffees",
  birthday: Time.now - 14.years,
  summary: "Web developer. Contact me!",
  status: "Enjoying BowserBook"
)

Post.create!(author_id: 12, about_id: 12, body: "Enjoying BowserBook")

Friendship.create!(friender_id: 1, friended_id: 2, responded: true, accepted: true)
Friendship.create!(friender_id: 1, friended_id: 3, responded: true, accepted: true)
Friendship.create!(friender_id: 1, friended_id: 6, responded: true, accepted: true)
Friendship.create!(friender_id: 1, friended_id: 10, responded: true, accepted: true)
Friendship.create!(friender_id: 5, friended_id: 1, responded: false, accepted: false)
Friendship.create!(friender_id: 4, friended_id: 1, responded: false, accepted: false)
Friendship.create!(friender_id: 2, friended_id: 4, responded: true, accepted: true)
Friendship.create!(friender_id: 2, friended_id: 5, responded: true, accepted: true)
Friendship.create!(friender_id: 2, friended_id: 6, responded: true, accepted: true)
Friendship.create!(friender_id: 2, friended_id: 12, responded: true, accepted: true)
Friendship.create!(friender_id: 3, friended_id: 7, responded: true, accepted: true)
Friendship.create!(friender_id: 3, friended_id: 8, responded: true, accepted: true)
Friendship.create!(friender_id: 3, friended_id: 9, responded: true, accepted: true)
Friendship.create!(friender_id: 11, friended_id: 3, responded: false, accepted: false)
Friendship.create!(friender_id: 4, friended_id: 5, responded: false, accepted: false)
Friendship.create!(friender_id: 4, friended_id: 6, responded: true, accepted: true)
Friendship.create!(friender_id: 5, friended_id: 6, responded: true, accepted: true)
Friendship.create!(friender_id: 5, friended_id: 10, responded: true, accepted: true)
Friendship.create!(friender_id: 6, friended_id: 10, responded: true, accepted: true)
Friendship.create!(friender_id: 7, friended_id: 8, responded: true, accepted: true)
Friendship.create!(friender_id: 9, friended_id: 11, responded: true, accepted: true)
Friendship.create!(friender_id: 9, friended_id: 10, responded: true, accepted: true)
Friendship.create!(friender_id: 11, friended_id: 12, responded: true, accepted: true)

Post.create!(author_id: 2, about_id: 1, body: "What are you up to later? Want to go jump into some pipes?")
Post.create!(author_id: 6, about_id: 1, body: "Mario, where are you? We need you!")
Post.create!(author_id: 6, about_id: 2, body: "Luigi, have you seen Mario? We really need his help.")
Post.create!(author_id: 3, about_id: 1, body: "Give up now Mario, you'll never get the princess back...")
Post.create!(author_id: 1, about_id: 6, body: "OK, I'm on it!")
Post.create!(author_id: 2, about_id: 6, body: "What, you don't think I could handle this? Unbelievable.")
Post.create!(author_id: 3, about_id: 11, body: "Any chance you're looking for a job?")
Post.create!(author_id: 3, about_id: 11, body: "Some very exciting opportunties just opened up...")
Post.create!(author_id: 4, about_id: 6, body: "Toad, please find Mario!")
Post.create!(author_id: 7, about_id: 3, body: "We missed you at bad-guy roundtable last week. What have you been doing?")
Post.create!(author_id: 8, about_id: 7, body: "Wanna play tennis?")
Post.create!(author_id: 8, about_id: 7, body: "C'mon let's play some doubles!")
Post.create!(author_id: 9, about_id: 10, body: "ROAR!")
Post.create!(author_id: 9, about_id: 3, body: "When do I get to start coming on your adventures? Can I borrow the secret key?")
Post.create!(author_id: 10, about_id: 9, body: "Gaga")
Post.create!(author_id: 10, about_id: 5, body: "Yoshi!")
Post.create!(author_id: 11, about_id: 3, body: "The job sounds interesting. I'll send you a message.")

Comment.create!(author_id: 6, post_id: 13, body: "Don't you have more important things to worry about??")
Comment.create!(author_id: 2, post_id: 13, body: "Well, Toad, apparently you don't need my help.")
Comment.create!(author_id: 6, post_id: 17, body: "Thank you!")
Comment.create!(author_id: 6, post_id: 16, body: "You're the worst, Bowser!")
Comment.create!(author_id: 1, post_id: 16, body: "I'm coming for her and there's nothing you can do to stop me!")

Message.create!(sender_id: 2, recipient_id: 1, body: "I found some great pipe courses in the outer Kingdom. I'll send you the links later!", read: false)
Message.create!(sender_id: 6, recipient_id: 1, body: "Mario, are you there? This is important! Please respond!", read: false)
Message.create!(sender_id: 8, recipient_id: 3, body: "Are you still up for the semi-annual bad-guy tennis tournament? Let me know!", read: false)
Message.create!(sender_id: 11, recipient_id: 3, body: "Sounds like you've been keeping busy. What does the job entail, and what kind of bonus are we talking about?", read: false)

Notification.create!(user_id: 1, body: "Luigi posted on your wall.", read: false, incoming: true)
Notification.create!(user_id: 1, body: "Toad posted on your wall.", read: false, incoming: true)
Notification.create!(user_id: 1, body: "Bowser posted on your wall.", read: false, incoming: true)
Notification.create!(user_id: 1, body: "Luigi sent you a message.", read: false, incoming: true)
Notification.create!(user_id: 1, body: "Toad sent you a message.", read: false, incoming: true)
Notification.create!(user_id: 1, body: "Toad commented on your post.", read: false, incoming: true)
Notification.create!(user_id: 3, body: "Wario posted on your wall.", read: false, incoming: true)
Notification.create!(user_id: 3, body: "Baby Bowser posted on your wall.", read: false, incoming: true)
Notification.create!(user_id: 3, body: "King Boo posted on your wall.", read: false, incoming: true)
Notification.create!(user_id: 3, body: "Waluigi sent you a message.", read: false, incoming: true)
Notification.create!(user_id: 3, body: "King Boo sent you a message.", read: false, incoming: true)
Notification.create!(user_id: 3, body: "Mario commented on your post.", read: false, incoming: true)
Notification.create!(user_id: 3, body: "Toad commented on your post.", read: false, incoming: true)

