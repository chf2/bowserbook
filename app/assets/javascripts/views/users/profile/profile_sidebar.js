BowserBook.Views.ProfileSidebar = Backbone.CompositeView.extend({
  template: JST['profile/sidebar'],

  className: 'sidebar',

  initialize: function () {
    var view = new BowserBook.Views.ProfileInfo({
      model: this.model
    });
    this.addSubview('#profile-info', view);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});