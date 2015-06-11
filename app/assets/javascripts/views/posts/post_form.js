BowserBook.Views.PostForm = Backbone.View.extend({
  template: JST['posts/new'],

  className: 'new-post-form',

  events: {
    'submit form': 'createPost'
  },

  initialize: function (options) {
    if (!options.model) {
      this._aboutId = options.about_id;
      this.model = new BowserBook.Models.Post({ about_id: this.aboutId() });
    }
    this.listenTo(this.model, 'sync', this.render);
  },

  aboutId: function () {
    if (!this._aboutId) {
      this._aboutId = this.model.about_id;
    } 

    return this._aboutId;
  },

  createPost: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    this.model.save(params, {
      success: function () {
        this.collection.add(this.model);
        this.model = new BowserBook.Models.Post({ about_id: this.aboutId() });
        this.render();
      }.bind(this)
    });
    
    if (this.aboutId() == window.CURRENT_USER_ID) {
      var user = new BowserBook.Models.User({ id: this.aboutId() });
      user.set({ status: params['post']['body'] });
      user.save();
    }
  },

  render: function () {
    var content = this.template({ 
      about_id: this.model.escape('about_id') 
    });
    this.$el.html(content);
    return this;
  }
});