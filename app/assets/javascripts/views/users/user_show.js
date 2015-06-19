BowserBook.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  className: 'profile-container',

  events: {
    'click li.wall-swap': 'swapToWall',
    'click li.info-swap': 'swapToInfo',
    'click li.friends-swap': 'swapToFriends'
  },

  initialize: function () {
    var landingView = new BowserBook.Views.ProfileLanding({ model: this.model });
    var profileNavView = new BowserBook.Views.ProfileNav({ model: this.model });
    var sidebarView = new BowserBook.Views.ProfileSidebar({ model: this.model });
    var wallView = new BowserBook.Views.Wall({
      model: this.model,
      collection: this.model.wallPosts()
    });
    
    this.addSubview('.landing-container', landingView);
    this.addSubview('.profile-navbar-container', profileNavView);
    this.addSubview('.sidebar-container', sidebarView);
    this.addSubview('.wall-info-container', wallView);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  swapHelper: function (event) {
    this.$('.active-li').removeClass('active-li');
    $(event.currentTarget).addClass('active-li');
    if (this.subviews('.wall-info-container')) {
      this.removeSubview(
        '.wall-info-container', 
        this.subviews('.wall-info-container').first()
      );
    }
  },

  swapToInfo: function (event) {
    this.swapHelper(event);
    var recentActivity = this.model.recentActivity();
    recentActivity.fetch({
      data: { recent_activity: true }
    });
    var infoView = new BowserBook.Views.ProfileInfoMain({
      model: this.model,
      collection: recentActivity
    });
    this.addSubview('.wall-info-container', infoView);
  },

  swapToFriends: function (event) {
    this.swapHelper(event);
    var friendsView = new BowserBook.Views.ProfileFriendsIndex({
      model: this.model,
      collection: this.model.friends()
    });
    this.addSubview('.wall-info-container', friendsView);
  },

  swapToWall: function (event) {
    this.swapHelper(event);
    var wallView = new BowserBook.Views.Wall({
      model: this.model,
      collection: this.model.wallPosts()
    });
    this.addSubview('.wall-info-container', wallView);
  }
});
