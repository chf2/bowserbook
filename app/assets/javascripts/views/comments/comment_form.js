BowserBook.Views.CommentForm = Backbone.View.extend({
  template: JST['comments/form'],

  className: 'comment-form',

  events: {
    'submit form': 'createComment'
  },

  initialize: function (options) {
    this.post = options.post;
    this.model = new BowserBook.Models.Comment();
  },

  render: function () {
    var content = this.template({ 
      post: this.post, 
      current_user_thumbnail_url: window.CURRENT_USER_THUMBNAIL_URL
    });
    this.$el.html(content);
    return this;
  },

  createComment: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    this.model.save(params, {
      success: function (model) {
        this.post.comments().add(this.model);
        this.model = new BowserBook.Models.Comment({ post: this.model.post });
        this.render();
      }.bind(this),
      error: function (model, response) {
        BowserBook.NotificationsFlash.flashNotification(
          "× Comment failed to save: " + response.responseJSON[0]
        );
      }
    });
  }
});