BowserBook.Views.FeedShow = Backbone.CompositeView.extend({
  template: JST['feed/show'],

  className: 'feed-container',

  initialize: function () {
    var sidebarView = new BowserBook.Views.FeedSidebar({ model: this.model });
    var contentView = new BowserBook.Views.FeedContent({ model: this.model });
    this.addSubview('.feed-sidebar-container', sidebarView);
    this.addSubview('.feed-content-container', contentView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});