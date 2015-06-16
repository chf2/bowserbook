BowserBook.Views.MessagesContainer = Backbone.CompositeView.extend({
  template: JST['messages/container'],

  className: 'messages-container',

  events: {
    'click message-index-item': 'showMessage'
  },

  initialize: function () {
    var messagesIndexView = new BowserBook.Views.MessagesIndex({
      model: this.model,
      collection: this.collection
    });
    this.addSubview('.messages-view-container', messagesIndexView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  showMessage: function (event) {
    var message = $(event.currentTarget).model;
    message.set({ 'read': true });
    message.save();
    
  },
});