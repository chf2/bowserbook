BowserBook.Collections.Comments = Backbone.Collection.extend({
  url: '/api/comments',

  model: BowserBook.Models.Comment,

  initialize: function (options) {
    this.post = options.post;
  }
});