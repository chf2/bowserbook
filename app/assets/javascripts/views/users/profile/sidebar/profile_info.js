BowserBook.Views.ProfileInfo = Backbone.View.extend({
  template: JST['profile/info'],

  className: 'profile-info',

  initialize: function () {
    this.listenTo(this.model, 'sync change', this.render);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
});