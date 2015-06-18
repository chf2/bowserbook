BowserBook.Collections.Notifications = Backbone.Collection.extend({
  url: '/api/notifications',

  model: BowserBook.Models.Notification,

  createNotification: function (attrs) {
    // body, incoming, user_id, show (Out only)
    var callback = function () {};
    var notification = new BowserBook.Models.Notification({
      body: attrs.body,
      incoming: attrs.incoming,
      user_id: attrs.user_id
    });
    if (!attrs.incoming && attrs.show) {
      callback = function () {
        this.add(notification);
      }.bind(this)
    }
    notification.save({}, {
      success: callback
    });
  },

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