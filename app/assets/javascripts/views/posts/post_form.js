BowserBook.Views.PostForm = Backbone.View.extend({
  template: JST['posts/new'],

  className: 'new-post-form',

  events: {
    'submit form': 'createPost'
  },

  initialize: function (options) {
    if (!options.model) {
      this.model = new BowserBook.Models.Post({ about_id: options.about_id});
    }
  },

  createPost: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    this.model.save(params, {
      success: function () {
        this.collection.add(this.model);
        $(event.currentTarget).find('textarea').val('');
        this.render();
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