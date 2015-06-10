BowserBook.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addPost);
    this.collection.each(this.addPost.bind(this));
  },

  addPost: function (post) {
    var postView = new BowserBook.Views.PostIndexItem({ model: post });
    this.addSubview('.wall-posts', postView, true);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});