BowserBook.Views.SidebarFriendsIndex = Backbone.CompositeView.extend({
  template: JST['profile/sidebar_friends_index'],

  className: 'clearfix profile-sidebar-friends-index',

  initialize: function () {
    this.listenTo(this.collection, 'sync add', this.render);
    this.listenTo(this.collection, 'add', this.addFriend);
    this.collection.each(this.addFriend.bind(this));
  },

  render: function () {
    var content = this.template({ numFriends: this.collection.length });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addFriend: function (friend) {
    var indexItem = new BowserBook.Views.SidebarFriendIndexItem({ 
      model: friend
    });
    this.addSubview('.sidebar-friends-list', indexItem);
  },
});