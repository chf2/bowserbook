# BowserBook

[bowserbook.com][heroku]

[heroku]: http://www.bowserbook.com

## Minimum Viable Product
BowserBook is a clone of facebook made for characters in the Mario universe. 
Key features: 

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [X] Users can create accounts
- [X] Users can log in / log out
- [X] Users have profile pages
- [X] Profile pages have 'about' user info
- [X] Users can add statuses to their page
- [X] Profile pages have a 'wall' of posts and statuses
- [X] Posts have full CRUD. Posts can have comments (CRD)
- [X] Users are searchable
- [ ] Users can add / remove friends to see their profiles
- [ ] Users can interact with other users (messages, pokes)
- [ ] Messages are marked as read / unread and are private to recipient
- [ ] Home page has feed showing recent posts and updates by friends
- [ ] User has notifications for activity involving them


## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Profile Page, Edit User Form (~1 day)
Checkpoints: 
  - Implement user creation and authentication
  - Set up user profile page as landing page
  - Profile page will display user info and link to edit form
  - Initial landing page / edit form is Rails / ERB only
  - Push to Heroku and ensure production site / database works

After Phase 1, users should be able to log in, log out, and edit their profile information.

[Details][phase-one]

### Phase 2a: Add Posts and Wall to Profile Page in Backbone (~2 days)
Checkpoints:
  - Create API endpoints to serve JSON data on users, and start routing in Backbone
  - Rewrite profile page as backbone template and implement model and view
  - Create Post model. Users can delete and update posts
  - Write wall view/template (under posts/index)

After Phase 2a, Posts should be fully functional. A user's wall should display all posts 'about' that user. Statuses are a subset of Posts. Site should be single page except for sign-up / sign-in.

[Details][phase-two]

### Phase 2b: Add Comments to Posts (~1 day)
Checkpoints: 
  - Create comment model, collection, and associations to posts
  - PostsIndexItem has form for new comment

Phase 2b adds comments to Posts. After this phase, the interactions between users and posts should be completed (excepting likes). 

[Details][phase-two]

### Phase 3: Friends (~1.5 days)
Checkpoints:
  - Users profiles are searchable by name using the navbar
  - Users can add and remove friends. This is a symmetric relationship (requires acceptance of a Friend Request)
  - User profile page shows list of friends
  - Users can only see / post to the walls of friends
  
Before Phase 3, there is no restriction on what content of other users a user can access. After Phase 3, users must add another user as a friend (and have that request accepted) before seeing another user's wall and posting to it. Other users can now be found by search. A list of a user's friends will show up on their profile page. 

[Details][phase-three]

### Phase 4: Interacting With Friends (~1.5 days)
Checkpoints: 
  - Users can 'poke' friends, pokes display to current user only on show page
  - Users can send friends private messages
  - Users can read their messages from friends

Phase 4 adds more complex user interactions in pokes and private messages. Messages should be unread by default and be marked as read once viewed by the user. Messages should be accessible through the user show page. 

[Details][phase-four]

### Phase 5: The Home Page and News Feed (~1 day)
Checkpoints: 
  - Landing page is now a News Feed page
  - News Feed page displays posts and status updates by a user's friends

Phase 5 should not greatly impact the functionality of the models of the site. The News Feed page should take currently implemented models and collections and organize them visually for the user in the form of a News Feed. 

[Details][phase-five]

### Phase 6: Notifications (~1 day)
Checkpoints: 
  - All actions produce notifications visible to the target user

Users' actions create notifications viewable by other users on log-in. 

[Details][phase-six]

### Bonus Features (TBD)
- [ ] Posts can have likes. User profile has tab to see all liked posts
- [ ] BowserBook suggests friends for users to add
- [ ] Pagination/infinite scroll for News Feed
- [ ] Users can add pictures and create albums. Users can put pictures in posts. 
- [ ] Users can play a game and see high scores by other users
- [ ] Multiple sessions/session management

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md

