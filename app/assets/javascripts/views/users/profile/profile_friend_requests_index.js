BowserBook.Views.FriendRequestsIndex = Backbone.CompositeView.extend({
  template: JST['profile/friend_requests_index'],

  className: "friend-requests-index",

  initialize: function () {
    this.listenTo(this.collection, 'sync add remove', this.render);
    this.listenTo(this.collection, 'add', this.addFriendRequest);
    this.collection.each(this.addFriendRequest.bind(this));
  },

  addFriendRequest: function (request) {
    var indexItemView = new BowserBook.Views.FriendRequestIndexItem({
      model: request,
      user: this.model,
      collection: this.collection,
      fromLanding: false
    });
    this.addSubview('.friend-requests-list', indexItemView);
  },

  render: function () {
    var content = this.template({ 
      userId: this.model.id,
      numFriendRequests: this.collection.length 
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});