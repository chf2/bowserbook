BowserBook.Views.UserForm = Backbone.View.extend({
  template: JST['users/form'],

  className: 'user-edit-form',

  events: {
    'submit form': 'submit'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.cloudinaryify();
    return this;
  },

  cloudinaryify: function () {
    this.$('#profile-image-upload').cloudinary_fileupload();
    this.$('#background-image-upload').cloudinary_fileupload();
  },

  submit: function (event) {
    event.preventDefault();

    var userForm = this,
        params = this.$('form').serializeJSON();

    userForm.model.save(params, {
      success: function (model) {
        userForm.collection.add(userForm.model, { merge: true });
        Backbone.history.navigate(
          '/profiles/' + userForm.model.id, 
          { trigger: true } 
        );

        var outMessage = "✓ Profile updated!"
        BowserBook.NotificationsOut.createNotification({
          body: outMessage,
          incoming: false,
          user_id: model.id,
          show: true
        });
      },
      error: function (model, response) {
        userForm.$el.append(response.to_json);
      }
    });
  }
});