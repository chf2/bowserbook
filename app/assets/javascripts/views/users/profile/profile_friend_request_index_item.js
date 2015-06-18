BowserBook.Views.FriendRequestIndexItem = Backbone.View.extend({
  template: JST['profile/friend_request_index_item'],

  tagName: 'li',

  events: {
    'click .accept-friend-request': 'acceptFriendRequest',
    'click .delete-friend-request': 'deleteFriendRequest'
  },

  initialize: function (options) {
    this.user = options.user;
    this.fromLanding = options.fromLanding;
  },

  acceptFriendRequest: function (event) {
    this.model.set({
      responded: true,
      accepted: true
    });
    this.model.save({}, {
      success: function (model) {
        var base = (this.fromLanding) ? 'friended' : 'friender'
        this.user.friends().add({
          id: this.model.escape(base +'_id'),
          username: this.model.escape(base +'_username'),
          image_url: this.model.escape(base +'_image_url'),
          status: this.model.escape(base +'_status')
        });
        if (this.collection) {
          this.collection.remove(this.model);
        }

        var outMessage = "Accepted friend request from " + 
          this.model.escape('friender_username') + ".";
        var inMessage = 
          this.model.escape('friended_username') + " accepted your friend request.";
        BowserBook.NotificationsOut.createNotification({
          body: outMessage,
          incoming: false,
          user_id: this.model.escape('friended_id'),
          show: false
        });
        BowserBook.NotificationsIn.createNotification({
          body: inMessage,
          incoming: true,
          user_id: this.model.escape('friender_id')
        });

        this.remove();
      }.bind(this)
    });
    ;
  },

  deleteFriendRequest: function (event) {
    this.model.set({
      responded: true,
      accepted: false
    });
    this.model.save({}, {
      success: function () {
        if (this.collection) {
          this.collection.remove(this.model);
        }

        var outMessage = "Declined friend request from " + 
          this.model.escape('friender_username') + ".";
        var inMessage = 
          this.model.escape('friended_username') + " declined your friend request.";
        BowserBook.NotificationsOut.createNotification({
          body: outMessage,
          incoming: false,
          user_id: this.model.escape('friended_id'),
          show: false
        });
        BowserBook.NotificationsIn.createNotification({
          body: inMessage,
          incoming: true,
          user_id: this.model.escape('friender_id')
        });

        this.remove();
      }.bind(this)
    });
  },

  render: function () {
    var content = this.template({
     request: this.model, fromLanding: this.fromLanding 
    });
    this.$el.html(content);
    return this;
  }
});