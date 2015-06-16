BowserBook.Views.MessageNew = Backbone.View.extend({
  template: JST['messages/new'],

  render: function () {
    var content = this.template({ users: this.collection });
    this.$el.html(content);
    return this;
  }
})