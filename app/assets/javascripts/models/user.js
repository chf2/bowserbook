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
    if (response.notifications) {
      this.notifications().set(response.notifications);
      delete response.notifications;
    }

    return response;
  },

  friends: function () {
    if (!this._friends) {
      this._friends = new BowserBook.Collections.Friends();
    }

    return this._friends;
  },

  friendRequestsIn: function () {
    if (!this._friendRequestsIn) {
      this._friendRequestsIn = new BowserBook.Collections.FriendRequests();
    }

    return this._friendRequestsIn;
  },

  messages: function () {
    if (!this._messages) {
      this._messages = new BowserBook.Collections.Messages();
    }
    this._messages.fetch();

    return this._messages;
  },

  notifications: function () {
    if (!this._notifications) {
      this._notifications = new BowserBook.Collections.Notifications();
    }
    this._notifications.fetch();

    return this._notifications;
  },

  wallPosts: function () {
    if (!this._wallPosts) {
      this._wallPosts = new BowserBook.Collections.Posts();
    }
    
    return this._wallPosts;
  }
});
