BowserBook.Views.MessagesContainer = Backbone.CompositeView.extend({
  template: JST['messages/container'],

  className: 'messages-container',

  events: {
    'click .message-index-item': 'showMessage',
    'click .message-index-btn': 'showIndex',
    'click .message-reply-btn': 'showNew',
    'click .message-new-btn': 'showNew',
    'submit form.create-message-form': 'sendMessage'
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

  sendMessage: function (event) {
    event.preventDefault();
    params = $(event.currentTarget).serializeJSON();
    var message = new BowserBook.Models.Message(params);
    message.save();
    this.showIndex();
  },

  showIndex: function (event) {
    var indexView = new BowserBook.Views.MessagesIndex({
      model: this.model,
      collection: this.collection
    });
    this._swapSubview(indexView);
  },

  showMessage: function (event) {
    var message = this.collection.getOrFetch($(event.currentTarget).data('id'));
    var showView = new BowserBook.Views.MessageShow({ model: message });
    this._swapSubview(showView)
  },

  showNew: function (event) {
    var selectedId = $(event.currentTarget).data('id') || -1;
    var newView = new BowserBook.Views.MessageNew({
      collection: this.model.friends(),
      selectedId: selectedId
    });
    this._swapSubview(newView);
  },

  _swapSubview: function (view) {
    this.removeSubview(
      '.messages-view-container', 
      this.subviews('.messages-view-container').first()
    );
    this.addSubview('.messages-view-container', view);
  }
});