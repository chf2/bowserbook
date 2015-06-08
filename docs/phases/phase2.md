# Phase 2: Creating and Displaying Posts and Comments

## Rails
### Models
* Post
* Comment

### Controllers
* Api::UsersController (create, show, update)
* Api::PostsController (create, destroy, update, index)
* Api::CommentsController (create, destroy, index)

### Views
* users/show.json.jbuilder
* posts/index.json.jbuilder
* comments/index.json.jbuilder

## Backbone
### Models
* User
* Post
* Comment

### Collections
* Posts
* Comments

### Views
* UserShow (composite view, contains PostsIndex subview)
* UserEdit
* PostsIndex (composite view, contains PostsIndexItem subviews)
* PostsIndexItem (composite view, contains CommentsIndex subview)
* CommentsIndex (composite view, contains CommentsIndexItem subview)
* CommentsIndexItem
* Navbar

## Gems/Libraries
* SerializeJSON
* ImageMagick