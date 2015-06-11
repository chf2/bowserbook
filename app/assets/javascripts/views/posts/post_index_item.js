BowserBook.Views.PostIndexItem = Backbone.CompositeView.extend({
  template: JST['posts/index_item'],
  
  className: 'post-index-item',

  events : {
    'click .delete': 'destroyPost',
    'click .edit': 'editPost'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  editPost: function (event) {
    event.preventDefault();
    var editForm = new BowserBook.Views.PostForm({ model: this.model });
    this.$el.html(editForm.render().$el);
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