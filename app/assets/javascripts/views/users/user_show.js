BowserBook.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    var landingView = new BowserBook.Views.ProfileLanding({
      model: this.model
    });
    var sidebarView = new BowserBook.Views.ProfileSidebar({
      model: this.model
    });
    var wall = new BowserBook.Views.Wall({
      model: this.model
    });
    this.addSubview('.landing-container', landingView);
    this.addSubview('.sidebar-container', sidebarView);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
