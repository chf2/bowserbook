BowserBook.Views.MessageShow = Backbone.View.extend({
  template: JST['messages/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ message: this.model });
    this.$el.html(content);
    return this;
  }
});