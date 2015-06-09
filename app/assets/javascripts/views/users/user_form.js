BowserBook.Views.UserForm = Backbone.View.extend({
  template: JST['users/form'],

  className: 'col-xs-8 col-xs-offset-2',

  events: {
    'submit form': 'submit'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();

    var userForm = this,
        params = this.$('form').serializeJSON();

    userForm.model.save(params, {
      success: function () {
        userForm.collection.add(userForm.model, { merge: true });
        debugger
        Backbone.history.navigate(
          'profiles/' + userForm.model.id, 
          { trigger: true } 
        );
      },
      error: function (model, response) {
        userForm.$el.append(response.to_json);
      }
    });
  }
});