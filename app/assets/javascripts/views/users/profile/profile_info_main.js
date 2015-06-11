BowserBook.Views.ProfileInfoMain = Backbone.View.extend({
  template: JST['profile/info_main'],

  className: 'profile-info-main',

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
});