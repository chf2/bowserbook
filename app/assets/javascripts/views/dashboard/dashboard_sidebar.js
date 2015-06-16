BowserBook.Views.DashboardSidebar = Backbone.CompositeView.extend({
  template: JST['dashboard/sidebar'],

  initialize: function () {
    var friendRequestsIndexView = new BowserBook.Views.FriendRequestsIndex({
      model: this.model,
      collection: this.model.friendRequestsIn()
    });
    this.addSubview(
      '.dashboard-sidebar-friend-requests-container',
      friendRequestsIndexView
    );
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    console.log("RENDERED SIDEBAR")
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});