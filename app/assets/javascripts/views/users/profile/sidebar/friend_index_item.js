BowserBook.Views.ProfileFriendIndexItem = Backbone.View.extend({
  template: JST['profile/friend_index_item'],

  className: 'friend-index-item',

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
});