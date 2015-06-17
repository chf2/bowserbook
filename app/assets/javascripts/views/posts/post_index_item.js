BowserBook.Views.PostIndexItem = Backbone.CompositeView.extend({
  template: JST['posts/index_item'],
  
  className: 'post-index-item',

  events : {
    'click .delete': 'destroyPost',
    'click .edit': 'editPost'
  },

  initialize: function () {
    this.collection = this.model.comments();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add remove', this.render); // TODO: NECESSARY?

    var commentFormView = new BowserBook.Views.CommentForm({ 
      post: this.model
    });
    var commentIndexView = new BowserBook.Views.CommentsIndex({ 
      collection: this.collection 
    });
    this.addSubview('.comment-form-container', commentFormView);
    this.addSubview('.comment-index-container', commentIndexView);
  },

  editPost: function (event) {
    event.preventDefault();
    var editForm = new BowserBook.Views.PostForm({ model: this.model });
    this.$el.html(editForm.render().$el);
  },

  destroyPost: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});