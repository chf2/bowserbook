BowserBook.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  parse: function (response) {
    if (response.wall_posts) {
      this.wallPosts().set(response.wall_posts, { parse: true });
      delete response.wall_posts;
    }
    if (response.wall_posts) {
      this.friends().set(response.friends);
      delete response.friends;
    }

    return response;
  },

  friends: function () {
    if (!this._friends) {
      this._friends = new BowserBook.Collections.Friends([], { user: this});
    }

    return this._friends;
  },

  wallPosts: function () {
    if (!this._wallPosts) {
      this._wallPosts = new BowserBook.Collections.Posts([], { user: this });
    }
    
    return this._wallPosts;
  }
});
