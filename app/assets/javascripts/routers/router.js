BowserBook.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.collection = options.collection;
    this.$rootEl = options.$rootEl;
    this.collection.fetch();
  },

  routes: {
    '': 'feed',
    'home': 'feed',
    'profiles/:id': 'show',
    'profiles/:id/edit': 'edit'
  },

  edit: function (id) {
    var user = this.collection.getOrFetch(id);

    var view = new BowserBook.Views.UserForm({
      model: user,
      collection: this.collection
    });
    this._swapView(view);
  },

  feed: function () {
    var user = this.collection.getOrFetch(window.CURRENT_USER_ID);
    var view = new BowserBook.Views.FeedShow({
      model: user
    });
    this._swapView(view);
  },

  show: function (id) {
    var user = this.collection.getOrFetch(id);

    var view = new BowserBook.Views.UserShow({
      model: user
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.$el);
    this._currentView.render();
  }
});
