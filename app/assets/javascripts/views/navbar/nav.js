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
    this._notificationsShowing = false;
    this.listenTo(BowserBook.CurrentUser, 'change:username change:id', this.render);
    this.listenTo(BowserBook.NotificationsFlash, 'add', this.displayNotificationsFlash);
    this.listenTo(BowserBook.NotificationsIn, 'reset add', this.updateNotificationsIn);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.$el.find('#sign_out_auth_token')
            .val($('meta[name=csrf-token]').attr('content'));
    return this;
  },

  // SEARCH METHODS

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

  // NOTIFICATIONS METHODS

  displayNotificationsFlash: function (notification) {
    var list = this.$('.notifications-flash-list');
    var item = $("<li class='notification-item'>");
    item.html(notification.escape('body'));
    list.append(item);
    list.slideDown(600);

    setTimeout(function () {
      list.slideUp(600, function () {
        BowserBook.NotificationsFlash.remove(notification);
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

  hideNotifications: function (event) {
    this._notificationsShowing = false;
    this.$('.notifications-in-list').slideUp(600, function () {
      BowserBook.NotificationsIn.each(function (notification) {
        notification.save({ read: true });
      });
      this.$('.notification-item').remove();
      BowserBook.NotificationsIn.fetch({ reset: true });
    }.bind(this));
  },

  showNotifications: function (event) {
    this._notificationsShowing = true;
    this.$('.notifications-in-list').slideDown(600);
  },

  updateNotificationsIn: function () {
    var list = this.$('.notifications-in-list');
    var badge = this.$('.notifications-badge');
    var numNotifications = BowserBook.NotificationsIn.length;
    BowserBook.NotificationsIn.each(function (notification) {
      var item = $("<li class='notification-item'>");
      item.html(notification.escape('body'));
      list.append(item);
    });

    badge.html(numNotifications);
    if (numNotifications > 0) {
      badge.css('background-color', 'red');
    } else {
      badge.css('background-color', '#AAA');
    }
  }
});