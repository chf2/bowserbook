BowserBook.Views.ProfileLanding = Backbone.View.extend({
  template: JST['profile/landing'],

  className: 'landing',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.$el.css({
      'background-image': 'url(' + this.model.escape('background_image_url') + ')',
      'background-size': '800px 300px'
    });
    return this;
  }
});