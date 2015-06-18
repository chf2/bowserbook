BowserBook.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],

  className: 'new-post-form',

  events: {
    'submit form': 'createPost',
    'click .close': 'closeForm'
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

  closeForm: function () {
    event.preventDefault();
    this.remove();
    // TODO: Fix massive bug where old post doesn't come back pls thx
  },

  createPost: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    this.model.save(params, {
      success: function (model) {
        if (this.collection) {
          this.collection.add(this.model);
        }

        if (parseInt(this.aboutId()) === parseInt(window.CURRENT_USER_ID)) {
          var user = new BowserBook.Models.User({ id: this.aboutId() });
          user.set({ status: params['post']['body'] });
          user.save({}, {
            success: function (model) {
              BowserBook.NotificationsOut.createNotification({
                body: "✓ Status updated.",
                incoming: false,
                user_id: model.escape('id'),
                show: true
              });
            }
          });
        } else {
          BowserBook.NotificationsIn.createNotification({
            body: window.CURRENT_USER_NAME + " posted on your wall.",
            incoming: true,
            user_id: model.escape('about_id')
          });
        }

        this.model = new BowserBook.Models.Post({ about_id: this.aboutId() });
        this.render();
      }.bind(this)
    });
  },

  render: function () {
    var content = this.template({ 
      post: this.model
    });
    this.$el.html(content);
    return this;
  }
});