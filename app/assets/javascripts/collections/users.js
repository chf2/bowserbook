BowserBook.Collections.Users = Backbone.Collection.extend({
  url: '/api/users/',

  model: BowserBook.Models.User,

  getOrFetch: function(id) {
    var collection = this;

    var user = collection.get(id);
    if (user) {
      user.fetch();
    } else {
      user = new BowserBook.Models.User({ id: id });
      user.fetch({
        success: function () {
          collection.add(user);
        }
      });
    }

    return user;
  }

});
