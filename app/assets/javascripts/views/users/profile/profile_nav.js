BowserBook.Views.ProfileNav = Backbone.View.extend({
  template: JST['profile/nav'],

  className: 'profile-navbar',

  render: function () {
    var content = this.template({ id: this.model.id });
    this.$el.html(content);
    return this;
  }
});