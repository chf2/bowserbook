BowserBook.Views.Nav = Backbone.View.extend({
  template: JST['navbar/nav'],

  className: "navbar-container",

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})