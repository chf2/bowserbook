BowserBook.Views.FeedSidebar = Backbone.CompositeView.extend({
  template: JST['feed/sidebar'],

  initialize: function () {
    var friendRequestsIndexView = new BowserBook.Views.FriendRequestsIndex({
      model: this.model,
      collection: this.model.friendRequestsIn()
    });
    this.addSubview(
      '.feed-sidebar-friend-requests-container',
      friendRequestsIndexView
    );
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});