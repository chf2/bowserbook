BowserBook.Views.Wall = Backbone.CompositeView.extend({
  template: JST['profile/wall'],

  className: 'col-xs-9',

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});