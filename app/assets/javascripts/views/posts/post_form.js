BowserBook.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],

  className: 'new-post-form',

  events: {
    'submit form': 'createPost'
  },

  initialize: function (options) {
    if (!options.model) {
      this._aboutId = options.about_id;
      this.model = new BowserBook.Models.Post({ about_id: this.aboutId() });
    }
    this.listenTo(this.model, 'sync', this.render);
  },

  aboutId: function () {
    if (!this._aboutId) {
      this._aboutId = this.model.about_id;
    } 

    return this._aboutId;
  },

  createPost: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    this.model.save(params, {
      success: function () {
        if (this.collection) {
          this.collection.add(this.model);
        }

        if (parseInt(this.aboutId()) === BowserBook.CurrentUser.id) {
          BowserBook.CurrentUser.save({ status: params['post']['body'] }, {
            success: function () {
              BowserBook.NotificationsFlash.flashNotification(
                "✓ Status updated."
              );
            },
            error: function (model, response) {
              BowserBook.NotificationsFlash.flashNotification(
                "× Status failed to save: " + response.responseJSON[0]
              );
            }
          });
        }

        this.model = new BowserBook.Models.Post({ about_id: this.aboutId() });
        this.render();
      }.bind(this),
      error: function (model, response) {
        BowserBook.NotificationsFlash.flashNotification(
          "× Post failed to save: " + response.responseJSON[0]
        );
      }
    });
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  }
});