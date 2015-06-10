BowserBook.Models.Post = Backbone.Model.extend({
  urlRoot: '/api/posts',

  author: function () {
    if (!this._author) {
      this._author = new BowserBook.Models.User({ id: this.author_id });
    }
    this._author.fetch();
    return this._author;
  },

  about: function () {
    if (!this._about) {
      this._about = new BowserBook.Models.User({ id: this.about_id });
    }
    this._about.fetch();
    return this._about;
  },

  // parse: function (response) {
  //   if (response.comments) {
  //     this.comments().set(response.comments);
  //     delete response.comments;
  //   }

  //   return response;
  // },

  // comments: function () {
  //   if (!this._comments) {
  //     this._comments = new BowserBook.Collections.Comments({ post: this });
  //   }

  //   return this._comments;
  // }
});