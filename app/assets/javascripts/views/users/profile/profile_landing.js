BowserBook.Views.ProfileLanding = Backbone.View.extend({
  template: JST['profile/landing'],

  className: 'landing',

  intialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
});