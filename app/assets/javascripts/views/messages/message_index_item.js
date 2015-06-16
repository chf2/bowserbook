BowserBook.Views.MessageIndexItem = Backbone.View.extend({
  template: JST['messages/index_item'],

  tagName: 'li',

  className: 'message-index-item',

  events: {
    'click': 'handleClick'
  },

  handleClick: function () {
    this.$el.data('id', this.model.id);
    if (this.model.escape('read') === 'false') {
      this.model.set({ 'read': true });
      this.model.save();
    }
  },

  render: function () {
    var content = this.template({ message: this.model });
    this.$el.html(content);
    return this;
  }
});