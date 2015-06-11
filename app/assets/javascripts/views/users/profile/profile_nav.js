BowserBook.Views.ProfileNav = Backbone.View.extend({
  template: JST['profile/nav'],

  className: 'profile-navbar navbar navbar-default',

  render: function () {
    var content = this.template({ id: this.model.id });
    this.$el.html(content);
    return this;
  }
});