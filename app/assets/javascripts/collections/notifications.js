BowserBook.Collections.Notifications = Backbone.Collection.extend({
  url: '/api/notifications',

  model: BowserBook.Models.Notification,

  getOrFetch: function(id) {
    var collection = this;

    var notification = collection.get(id);
    if (notification) {
      notification.fetch();
    } else {
      notification = new BowserBook.Models.Notification({ id: id });
      notification.fetch({
        success: function () {
          collection.add(notification);
        }
      });
    }

    return notification;
  }
});