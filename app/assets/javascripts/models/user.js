BowserBook.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  parse: function (response) {
    if (response.wall_posts) {
      this.wallPosts().set(response.wall_posts);
      delete response.wall_posts;
    }

    return response;
  },

  wallPosts: function () {
    if (!this._wallPosts) {
      this._wallPosts = new BowserBook.Collections.Posts([], { user: this });
    }

    return this._wallPosts;
  }
});
