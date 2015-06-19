BowserBook.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.collection = options.collection;
    this.$rootEl = options.$rootEl;
    this.collection.fetch();
  },

  routes: {
    '': 'feed',
    'home': 'feed',
    'messages': 'messages',
    'profiles/:id': 'show',
    'profiles/:id/edit': 'edit'
  },

  dashboard: function (subview) {
    if (this._currentView instanceof BowserBook.Views.DashboardShow) {
      this._currentView.swapContent(subview);
    } else {
      var user = BowserBook.CurrentUser;
      var dashboardView = new BowserBook.Views.DashboardShow({
        model: user,
        contentSubview: subview
      });
      this._swapView(dashboardView);
    }
  },

  edit: function (id) {
    var user = this.collection.getOrFetch(id);
    var editView = new BowserBook.Views.UserForm({
      model: user,
      collection: this.collection
    });
    this.dashboard(editView);
  },

  feed: function () {
    var user = BowserBook.CurrentUser;
    var feedView = new BowserBook.Views.FeedContent({ model: user });
    this.dashboard(feedView);
  },

  messages: function () {
    var user = BowserBook.CurrentUser;
    var messagesView = new BowserBook.Views.MessagesContainer({
      model: user,
      collection: user.messages()
    });
    this.dashboard(messagesView);
  },

  show: function (id) {
    var user;
    if (parseInt(id) === BowserBook.CurrentUser.id) {
      user = BowserBook.CurrentUser;
    } else {
      user = this.collection.getOrFetch(id);
    }
    var view = new BowserBook.Views.UserShow({ model: user });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.$el);
    this._currentView.render();
  }
});
