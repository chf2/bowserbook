BowserBook.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  className: 'profile-container',

  events: {
    'click li.wall-swap': 'swapToWall',
    'click li.info-swap': 'swapToInfo'
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
    debugger;
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
    var infoView = new BowserBook.Views.ProfileInfoMain({
      model: this.model
    });
    this.addSubview('.wall-info-container', infoView);
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
