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
    this.addSubview('.messages-list', messageView);
  },

  render: function () {
    var content = template({ messages: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});