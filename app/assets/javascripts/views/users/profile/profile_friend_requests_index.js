BowserBook.Views.FriendRequestsIndex = Backbone.CompositeView.extend({
  template: JST['profile/friend_requests_index'],

  className: "friends-requests-index",

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addFriendRequest);
    this.collection.each(this.addFriendRequest.bind(this));
  },

  addFriendRequest: function (requester) {
    var indexItemView = new BowserBook.Views.FriendReqestIndexItem({
      requester: requester
    });
    this.addSubview('.friend-requests-list', indexItemView)
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});