BowserBook.Views.ProfileLanding = Backbone.View.extend({
  template: JST['profile/landing'],

  className: 'landing',

  events: {
    'click .send-friend-request': 'sendFriendRequest'
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
    return this;
  },

  sendFriendRequest: function (event) {
    var newFriendship = new BowserBook.Models.FriendRequest({
      friended_id: this.model.id
    });
    newFriendship.save({}, {
      success: function () {
        this.model.set('request_sent', true);
        this.render();
      }.bind(this)
    });
  }
});