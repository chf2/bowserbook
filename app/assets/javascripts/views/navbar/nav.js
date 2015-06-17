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
    this.notificationsOut = BowserBook.NotificationsOut;
    this.notificationsIn = BowserBook.NotificationsIn;
    this._notificationsShowing = false;
    this.listenTo(this.notificationsOut, 'add', this.displayNotificationsOut);
    this.listenTo(this.notificationsIn, 'sync', this.updateNotificationsIn);
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

  displayNotificationsOut: function (notification) {
    var list = this.$('.notifications-out-list');
    var item = $("<li class='notification-item'>");
    item.html(notification.escape('body'));
    list.append(item);

    list.slideDown(600);
    setTimeout(function () {
      list.slideUp(600, function () {
        BowserBook.NotificationsOut.remove(notification);
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
    this.$('.notifications-in-list').slideDown();
  },

  hideNotifications: function (event) {
    this._notificationsShowing = false;
    this.$('.notifications-in-list').slideUp();
  },

  updateNotificationsIn: function () {
    var list = this.$('.notifications-in-list');
    var badge = this.$('.notifications-badge')
    var numNotifications = this.notificationsIn.length;
    this.notificationsIn.each(function (notification) {
      var item = $("<li class='notification-item'>");
      item.html(notification.escape('body'));
      list.append(item);
    });
    badge.html(numNotifications);
    if (numNotifications > 0) {
      badge.css('background-color', 'red')
    } else {
      badge.css('background-color', '#AAA')
    }
  }
})