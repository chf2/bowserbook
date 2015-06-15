BowserBook.Views.SidebarFriendIndexItem = Backbone.View.extend({
  template: JST['profile/sidebar_friend_index_item'],

  tagName: 'li',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ friend: this.model });
    this.$el.html(content);
    return this;
  }
});