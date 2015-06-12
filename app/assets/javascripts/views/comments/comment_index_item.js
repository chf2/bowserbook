BowserBook.Views.CommentIndexItem = Backbone.View.extend({
  template: JST['comments/index_item'],

  className: 'comment-index-item',

  events: {
    'click .delete': 'destroyComment'
  },

  destroyComment: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },

  render: function () {
    var content = this.template({ comment: this.model})
    this.$el.html(content);
    return this;
  }
});