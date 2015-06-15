BowserBook.Views.FriendRequestIndexItem = Backbone.View.extend({
  template: JST['profile/friend_request_index_item'],

  render: function () {
    var content = this.template({ request: this.model });
    this.$el.html(content);
    return this;
  }
});