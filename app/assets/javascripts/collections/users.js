BowserBook.Collections.Users = Backbone.Collection.extend({
  url: '/api/users/',

  model: BowserBook.Models.User,

  getOrFetch: function(id) {
    var colleciton = this;

    var user = colleciton.get(id);
    if (user) {
      user.fetch();
    } else {
      user = new BowserBook.Models.User({ id: id });
      user.fetch({
        success: function () {
          colleciton.add(user);
        }
      });
    }

    return user;
  }

});
