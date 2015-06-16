BowserBook.Views.MessageIndexItem = Backbone.View.extend({
  template: JST['messages/index_item'],

  tagName: 'li',

  className: 'message-index-item',

  render: function () {
    var content = this.template({ message: this.model });
    this.$el.html(content);
    return this;
  }
});