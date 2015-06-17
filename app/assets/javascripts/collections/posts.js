BowserBook.Collections.Posts = Backbone.Collection.extend({
  url: '/api/posts',

  model: BowserBook.Models.Post,

  getOrFetch: function(id) {
    var collection = this;

    var post = collection.get(id);
    if (post) {
      post.fetch();
    } else {
      post = new BowserBook.Models.Post({ id: id });
      post.fetch({
        success: function () {
          collection.add(post);
        }
      });
    }

    return post;
  }
});