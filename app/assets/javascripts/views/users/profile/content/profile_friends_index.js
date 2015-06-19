BowserBook.Views.ProfileFriendsIndex = Backbone.CompositeView.extend({
  template: JST['profile/friends_index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addFriend);
    this.collection.each(this.addFriend.bind(this));
  },

  render: function () {
    var content = this.template({
      user: this.model,
      friends: this.collection
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addFriend: function (friend) {
    var indexItem = new BowserBook.Views.ProfileFriendIndexItem({ 
      model: friend
    });
    debugger
    this.addSubview('.profile-friends-container', indexItem);
  }
});