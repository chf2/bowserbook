BowserBook.Views.ProfileLanding = Backbone.CompositeView.extend({
  template: JST['profile/landing'],

  className: 'landing',

  events: {
    'click .send-friend-request': 'sendFriendRequest',
    'click .respond-friend-request': 'respondFriendRequest',
    'click .friend-request-btn': 'render'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.$el.css({
      'background-image': 'url(' + this.model.escape('background_image_url') + ')',
      'background-size': '800px 350px'
    });
    this.attachSubviews();
    return this;
  },

  respondFriendRequest: function (event) {
    var request = new BowserBook.Models.FriendRequest({ 
      id: this.model.escape('request_received_id')
    });
    var friendRequestView = new BowserBook.Views.FriendRequestIndexItem({
      model: request,
      user: this.model,
      fromLanding: true
    });
    this.addSubview('.landing-friend-status-respond', friendRequestView);
    this.render();
  },

  sendFriendRequest: function (event) {
    var newFriendship = new BowserBook.Models.FriendRequest({
      friended_id: this.model.id
    });
    newFriendship.save({}, {
      success: function (model) {
        this.model.set('request_sent', true);
        this.render();

        debugger

        var outMessage = "Sent friend request to " + 
          this.model.escape('username') + ".";
        var inMessage = 
          model.escape('friender_username') + " sent you a friend request.";
        BowserBook.NotificationsOut.createNotification({
          body: outMessage,
          incoming: false,
          user_id: model.escape('friender_id'),
          show: false
        });
        BowserBook.NotificationsIn.createNotification({
          body: inMessage,
          incoming: true,
          user_id: model.escape('friended_id')
        });
      }.bind(this)
    });
  }
});