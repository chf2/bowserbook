BowserBook.Views.Nav = Backbone.View.extend({
  template: JST['navbar/nav'],

  className: "navbar-container",

  events: {
    'keyup #users-search': 'searchUsers'
  },

  initialize: function () {
    this.collection = new BowserBook.Collections.Users();
    this.collection.fetch();
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.$el.find('#sign_out_auth_token')
            .val($('meta[name=csrf-token]').attr('content'));
    return this;
  },

  searchUsers: function (event) {
    var searchString = $(event.currentTarget).val();
    var usernames = this.collection.map(function (user) {
      debugger;
      return user.username;
    });
  }
})