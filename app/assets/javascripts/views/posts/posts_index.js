BowserBook.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'remove destroy', this.removePost);
    this.listenTo(this.collection, 'add', this.addPost);
    this.collection.each(this.addPost.bind(this));
  },

  addPost: function (post) {
    var postView = new BowserBook.Views.PostIndexItem({ model: post });
    this.addSubview('.wall-posts', postView, true);
  },

  removePost: function (post) {
    this.removeModelSubview('.wall-posts', post);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});