BowserBook.Views.PostIndexItem = Backbone.CompositeView.extend({
  template: JST['posts/index_item'],

  events : {
    'click .delete': 'destroyPost',
    'click .edit': 'editPost'
  },

  className: 'post-index-item',

  editPost: function (event) {
    event.preventDefault();
    console.log('edit clicked');
  },

  destroyPost: function (event) {
    event.preventDefault();
    // this.model.comments().destroy();
    this.model.destroy();
    this.remove();
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  }
});