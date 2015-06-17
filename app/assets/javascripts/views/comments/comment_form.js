BowserBook.Views.CommentForm = Backbone.View.extend({
  template: JST['comments/form'],

  className: 'comment-form',

  events: {
    'submit form': 'createComment'
  },

  initialize: function (options) {
    this.post = options.post;
    this.user = options.user;
    this.model = new BowserBook.Models.Comment();
    this.listenTo(this.user, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ post: this.post, user: this.user });
    this.$el.html(content);
    return this;
  },

  createComment: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    this.model.save(params, {
      success: function () {
        this.post.comments().add(this.model);
        this.model = new BowserBook.Models.Comment({ post: this.model.post });
        this.render();
      }.bind(this)
    });
  }
});