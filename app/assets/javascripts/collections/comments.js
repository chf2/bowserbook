BowserBook.Collections.Comments = Backbone.Collection.extend({
  url: '/api/comments',

  model: BowserBook.Models.Comment,

  initialize: function (options) {
    this.post = options.post;
  },

  getOrFetch: function(id) {
    var collection = this;

    var comment = collection.get(id);
    if (comment) {
      comment.fetch();
    } else {
      comment = new BowserBook.Models.Comment({ id: id });
      comment.fetch({
        success: function () {
          collection.add(comment);
        }
      });
    }

    return comment;
  }
});