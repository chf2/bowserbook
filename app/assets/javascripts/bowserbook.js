window.BowserBook = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var users = new BowserBook.Collections.Users();
    BowserBook.NotificationsFlash = new BowserBook.Collections.Notifications();
    BowserBook.NotificationsIn = new BowserBook.Collections.Notifications();
    BowserBook.NotificationsIn.fetch({ reset: true });
    var router = new BowserBook.Routers.Router({
      collection: users,
      $rootEl: $('#main')
    });
    Backbone.history.start();

    var navbar = new BowserBook.Views.Nav({
      router: router,
      collection: users
    });

    $('#navbar').html(navbar.render().$el);
  }
}
