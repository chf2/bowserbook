BowserBook.Collections.FriendRequests = Backbone.Collection.extend({
  url: '/api/friendships',

  model: BowserBook.Models.FriendRequest,

  initialize: function (models, options) {
    this.user = options.user;
  },

  getOrFetch: function(id) {
    var collection = this;

    var friendRequest = collection.get(id);
    if (friendRequest) {
      friendRequest.fetch();
    } else {
      friendRequest = new BowserBook.Models.FriendRequest({ id: id });
      friendRequest.fetch({
        success: function () {
          collection.add(friendRequest);
        }
      });
    }

    return friendRequest;
  }
});