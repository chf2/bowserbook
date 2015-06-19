BowserBook.Views.ProfileInfoMain = Backbone.CompositeView.extend({
  template: JST['profile/info_main'],

  className: 'profile-info-main',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addActivity);
    this.collection.each(this.addActivity.bind(this));
  },

  addActivity: function (activity) {
    var activityView = new BowserBook.Views.ActivityIndexItem({
      model: activity
    });
    this.addSubview('.recent-activity-list', activityView, true);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});