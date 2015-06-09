BowserBook.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    var landing = new BowserBook.Views.ProfileLanding({
      model: this.model
    });
    // var sidebar = new BowserBook.Views.ProfileSidebar({
    //   model: this.model
    // });
    // var wall = new BowserBook.Views.Wall({
    //   model: this.model
    // });
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }

});
