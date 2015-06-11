BowserBook.Models.Post = Backbone.Model.extend({
  urlRoot: '/api/posts',

  parse: function (response) {
    if (response.comments) {
      this.comments().set(response.comments);
      delete response.comments;
    }

    return response;
  },

  comments: function () {
    if (!this._comments) {
      this._comments = new BowserBook.Collections.Comments({ post: this });
    }

    return this._comments;
  }
});