BowserBook.Views.Wall = Backbone.CompositeView.extend({
  template: JST['profile/wall'],

  className: 'wall',

  initialize: function (options) {
    this.listenTo(this.collection, 'sync', this.render);
    var newPostView = new BowserBook.Views.PostForm({
      about_id: this.model.id,
      collection: this.collection
    });
    var wallPostsView = new BowserBook.Views.PostsIndex({
      collection: this.collection,
      currentUser: options.user
    });
    this.addSubview('.new-post-container', newPostView);
    this.addSubview('.wall-posts-container', wallPostsView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});