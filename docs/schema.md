# Schema Information

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
post_id     | integer   | not null, foreign key (references posts)
body        | text      |

## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
friender_id | integer   | not null, foreign key (references users)
friended_id | integer   | not null, foreign key (references users), indexed on [friender_id, friended_id], unique: true
accepted    | boolean   | 
responded   | boolean   | not null, default: false

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
receiver_id | integer   | not null, foreign key (references users)
body        | text      |
read        | boolean   | not null, default: false

## notifications
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
body        | string    |
read        | boolean   | not null, default: false

## pokes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
poker_id    | integer   | not null, foreign key (references users)
pokee_id    | integer   | not null, foreign key (references users), indexed on [poker_id, pokee_id], unique: true

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
about_id    | integer   | not null, foreign key (references users)
body        | text      |

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
location        | string    |
rival           | string    |
interests       | string    |
birthday        | datetime  |
image_url       | string    | not null


