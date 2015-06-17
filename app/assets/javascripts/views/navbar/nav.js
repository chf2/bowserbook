BowserBook.Views.Nav = Backbone.View.extend({
  template: JST['navbar/nav'],

  className: "navbar-container",

  events: {
    'input #users-search': 'searchUsers',
    'click .search-result': 'clearInput',
    'click .bb-navbar-container': 'clearInput',
    'click .notifications-button': 'handleNotificationsClick'
  },

  initialize: function () {
    this.collection = new BowserBook.Collections.Users();
    this.notifications = BowserBook.Notifications;
    this._notificationsShowing = false;
    this.listenTo(this.notifications, 'add', this.displayOutNotifications);
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

  clearInput: function (event) {
    this.$('#users-search').val('');
    this.$('.search-results-container').empty();
  },

  getUserResults: function (searchString) {
    var results = [];
    this.collection.each(function (user) {
      if (user.escape('username').toLowerCase()
            .match(searchString.toLowerCase())
         )
      {
        results.push(user);
      }
    });

    return results;
  },

  searchUsers: function (event) {
    this.$('.search-results-container').empty();
    var searchString = $(event.currentTarget).val();
    if (searchString.length === 0) {
      return;
    }
    this.collection.fetch({
      data: { queryString: searchString },
      success: function () {
        var results = this.getUserResults.call(this, searchString);
        this.appendSearchResults.call(this, results);
      }.bind(this)
    });
  },

  // NOTIFICATIONS LOGIC

  displayOutNotifications: function (notification) {
    var list = this.$('.notifications-list');
    var item = $("<li class='notification-item'>");
    item.html(notification.escape('body'));
    list.append(item);

    if (!this._notificationsShowing) {
      list.slideDown(600);
    }
    setTimeout(function () {
      list.slideUp(600, function () {
        BowserBook.Notifications.remove(notification);
        item.remove();
      });
    }, 3000);
    this._notificationsShowing = false;
  },

  handleNotificationsClick: function (event) {
    if (this._notificationsShowing) {
      this.hideNotifications();
    } else {
      this.showNotifications();
    }
  },

  showNotifications: function (event) {
    this._notificationsShowing = true;
    this.$('.notifications-list').slideDown();
  },

  hideNotifications: function (event) {
    this._notificationsShowing = false;
    this.$('.notifications-list').slideUp();
  }
})