BowserBook.Views.ProfileSidebar = Backbone.CompositeView.extend({
  template: JST['profile/sidebar'],

  className: 'sidebar',

  initialize: function () {
    var profileInfoView = new BowserBook.Views.ProfileInfo({
      model: this.model
    });
    var friendsIndexView = new BowserBook.Views.SidebarFriendsIndex({
      model: this.model,
      collection: this.model.friends()
    });
    var friendRequestsIndexView = new BowserBook.Views.FriendRequestsIndex({
      model: this.model,
      collection: this.model.friendRequestsIn()
    });
    this.addSubview('.friends-index-container', friendsIndexView);
    this.addSubview('.profile-info-container', profileInfoView);
    this.addSubview('.friend-requests-index-container', friendRequestsIndexView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});