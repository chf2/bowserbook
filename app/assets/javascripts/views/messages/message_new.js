BowserBook.Views.MessageNew = Backbone.View.extend({
  template: JST['messages/new'],

  initialize: function (options) {
    this.selectedId = options.selectedId;
  },

  render: function () {
    var content = this.template({ 
      users: this.collection,
      selectedId: this.selectedId
    });
    this.$el.html(content);
    return this;
  }
})