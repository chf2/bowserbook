BowserBook.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/index'],

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addPost.bind(this));
    this.collection.each(this.addPost.bind(this));
  },

  addPost: function (post) {
    var postView = new BowserBook.Views.PostIndexItem({ 
      model: post,
      user: this.user
    });
    this.addSubview('.wall-posts', postView, true);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});