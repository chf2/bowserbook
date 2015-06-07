# Phase 3: Adding Friends and Searching Users

## Rails
### Models
* FriendRequest
* Friendship

### Controllers
* Api::FriendRequestsController (create, update, destroy)
* FriendshipsController (create, update, destroy)

### Views
* users/index.json.jbuilder

## Backbone
### Models
* FriendRequest

### Collections
* Users (all -- for search)
* Friends (selected -- model: user)
* FriendRequests

### Views
* FriendRequestIndex (composite view, has FriendRequestIndexItem subview)
* FriendReqestIndexItem
* FriendIndex (subview to UserShow)

## Gems/Libraries

