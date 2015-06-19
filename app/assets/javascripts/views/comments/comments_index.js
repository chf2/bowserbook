BowserBook.Views.CommentsIndex = Backbone.CompositeView.extend({
  template: JST['comments/index'],

  className: 'comments-index',

  initialize: function () {
    this.listenTo(this.collection, 'add', this.render)
    this.listenTo(this.collection, 'remove destroy', this.removeComment);
    this.listenTo(this.collection, 'add', this.addComment)
    this.collection.each(this.addComment.bind(this));
  },

  addComment: function (comment) {
    var commentView = new BowserBook.Views.CommentIndexItem({ model: comment });
    this.addSubview('.comments-container', commentView);
  },

  removeComment: function (comment) {
    this.removeModelSubview('.comments-container', comment);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});