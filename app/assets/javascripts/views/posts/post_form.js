BowserBook.Views.PostForm = Backbone.View.extend({
  template: JST['posts/new'],

  events: {
    'submit form': 'createPost'
  },

  createPost: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    this.model.save(params, {
      success: function () {
        this.collection.add(this.model);
        $(event.currentTarget).find('textarea').val('');
      }.bind(this)
    });
  },

  render: function () {
    var content = this.template({ 
      about_id: this.model.escape('about_id') 
    });
    this.$el.html(content);
    return this;
  }
});