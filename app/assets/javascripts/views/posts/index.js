BowserBook.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/index'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});