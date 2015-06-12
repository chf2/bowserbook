BowserBook.Views.Nav = Backbone.View.extend({
  template: JST['navbar/nav'],

  className: "navbar-container",

  events: {
    'input #users-search': 'searchUsers'
  },

  initialize: function () {
    this.collection = new BowserBook.Collections.Users();
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.$el.find('#sign_out_auth_token')
            .val($('meta[name=csrf-token]').attr('content'));
    return this;
  },

  appendSearchResults: function (results) {
    results.forEach(function (user) {
      var resultListItem = $('<li class="search-result">');
      var resultLink = $("<a class='search-result-link'>");
      resultLink.text(user.escape('username'));
      resultLink.attr('href', '/#/profiles/' + user.id);
      resultListItem.html(resultLink);
      this.$('.search-results-container').append(resultListItem);
    }.bind(this));
  },

  getUserResuts: function (searchString) {
    var results = [];
    this.collection.each(function(user) {
      if (user.escape('username').toLowerCase()
            .match(searchString.toLowerCase())
         )
      {
        results.push(user);
      }

      return results;
    });
  },

  searchUsers: function (event) {
    this.$('.search-results-container').empty();
    var searchString = $(event.currentTarget).val();
    console.log('triggered');
    if (searchString.length === 0) {
      return;
    }
    this.collection.fetch({
      data: { queryString: searchString },
      success: function () {
        var results = this.getUserResuts();
        this.appendSearchResults(results);
      }.bind(this)
    });
  }
})