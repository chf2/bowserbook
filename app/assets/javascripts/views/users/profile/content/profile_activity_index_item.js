BowserBook.Views.ActivityIndexItem = Backbone.View.extend({
  template: JST['profile/activity_index_item'],

  tagName: 'li',

  className: 'activity-index-item',

  render: function () {
    var content = this.template({ activity: this.model });
    this.$el.html(content);
    return this;
  }
});