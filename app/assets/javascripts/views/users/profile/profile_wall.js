BowserBook.Views.Wall = Backbone.CompositeView.extend({
  template: JST['profile/wall'],

  className: 'wall',

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});