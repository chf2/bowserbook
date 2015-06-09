BowserBook.Views.ProfileLanding = Backbone.View.extend({
  template: JST['profile/landing'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});