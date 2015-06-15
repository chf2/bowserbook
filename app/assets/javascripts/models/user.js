BowserBook.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  parse: function (response) {
    if (response.wall_posts) {
      this.wallPosts().set(response.wall_posts, { parse: true });
      delete response.wall_posts;
    }
    if (response.friends) {
      this.friends().set(response.friends);
      delete response.friends;
    }
    if (response.friend_requests_in) {
      this.friendRequestsIn().set(response.friend_requests_in);
      delete response.friend_requests_in;
    }

    return response;
  },

  friends: function () {
    if (!this._friends) {
      this._friends = new BowserBook.Collections.Friends([], { user: this });
    }

    return this._friends;
  },

  friendRequestsIn: function () {
    if (!this._friendRequestsIn) {
      this._friendRequestsIn = new BowserBook.Collections.FriendRequests(
        [], { user: this }
      );
    }

    return this._friendRequestsIn;
  },

  wallPosts: function () {
    if (!this._wallPosts) {
      this._wallPosts = new BowserBook.Collections.Posts([], { user: this });
    }
    
    return this._wallPosts;
  }
});
