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
  location: "Super Mario World",
  rival: "Bowser",
  interests: "Plubming, fireballs",
  birthday: Time.now - 3.months,
  summary: "I'm Mario. I've been saving princesses since I was born. This should have been called MarioBook!",
  status: "Feeling pretty good about finding that next star today!",
  profile_public_id: "image/upload/v1434157467/bowserbook_images/c18ydlivlu3ju6pggjmx.png#20f372ee3cb3cedf1380a584e5e90289cb2ac257",
  background_public_id: "image/upload/v1434219755/bowserbook_images/vian5na20nvidqrmpejy.png#9a2852194f4c040da9e92d76e4d9c41468244164"
)

User.create!(
  username: "Bowser",
  password: "password",
  location: "Occupying Princess Peach's Castle",
  rival: "Mario",
  interests: "Stealing things, being bad, breathing fire",
  birthday: Time.now - 6.months,
  summary: "I am Bowser, and I am the best. This website was named after me for a reason!",
  status: "Plotting my next move...",
  profile_public_id: "image/upload/v1434219865/bowserbook_images/a9tim5clwljp89lt92cm.png#034a03a1d9b9b35b75ee79f2652a93aaf4144b2f",
  background_public_id: "image/upload/v1434219873/bowserbook_images/evtmilo2dk039dvekt0c.png"
)

User.create!(
  username: "Peach",
  password: "password",
  location: "My Castle",
  rival: "Bowser",
  interests: "Getting captured, apparently",
  birthday: Time.now - 6.months,
  summary: "I own most of the real estate in the Mario universe.",
  status: "Help!",
  profile_public_id: "image/upload/v1434219979/bowserbook_images/milsrrrjhapyxahuyqyl.png#41da5d2137be29beae3599f2aa0b8589722b9afa",
  background_public_id: "image/upload/v1434219942/bowserbook_images/uk9gc8uv4qj2gefkqtmd.png#088d1fca1c6907c947116649f0807aa001af7e52"
)

User.create!(
  username: "Yoshi",
  password: "password",
  location: "Yoshi's Island",
  rival: "Koopa",
  interests: "Laying eggs, eating things",
  birthday: Time.now - 2.years,
  summary: "Excellent racer. Mario's favorite companion. Koopas and Goombas, look out!",
  status: "Pop!",
  profile_public_id: "image/upload/v1434219979/bowserbook_images/yoshi_profile.png",
  background_public_id: "image/upload/v1434219942/bowserbook_images/yoshi_bg.png"
)

Friendship.create!(friender_id: 1, friended_id: 2, responded: true, accepted: true)
Friendship.create!(friender_id: 1, friended_id: 3, responded: true, accepted: true)
Friendship.create!(friender_id: 1, friended_id: 4, responded: true, accepted: true)
Friendship.create!(friender_id: 3, friended_id: 4, responded: true, accepted: true)

