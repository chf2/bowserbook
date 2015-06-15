BowserBook.Views.FriendRequestIndexItem = Backbone.View.extend({
  template: JST['profile/friend_request_index_item'],

  tagName: 'li',

  events: {
    'click .accept-friend-request': 'acceptFriendRequest',
    'click .delete-friend-request': 'deleteFriendRequest'
  },

  acceptFriendRequest: function (event) {
    this.model.set({
      responded: true,
      accepted: true
    });
    this.model.save();
    this.remove();
  },

  deleteFriendRequest: function (event) {
    this.model.set({
      responded: true,
      accepted: false
    });
    this.model.save();
    this.remove();
  },

  render: function () {
    var content = this.template({ request: this.model });
    this.$el.html(content);
    return this;
  }
});