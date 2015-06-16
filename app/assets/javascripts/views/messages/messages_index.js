BowserBook.Views.MessagesIndex = Backbone.CompositeView.extend({
  template: JST['messages/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addMessage);
    this.collection.each(this.addMessage.bind(this));
  },

  addMessage: function (message) {
    var messageView = new BowserBook.Views.MessageIndexItem({
      model: message
    });
    this.addSubview('.messages-list', messageView, true);
  },

  render: function () {
    var unreadMessages = this.collection.filter(function (message) {
      return message.escape('read') === 'false';
    }).length;
    var content = this.template({ unreadMessages: unreadMessages });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});