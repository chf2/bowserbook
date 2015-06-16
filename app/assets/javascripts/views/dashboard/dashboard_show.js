BowserBook.Views.DashboardShow = Backbone.CompositeView.extend({
  template: JST['dashboard/show'],

  className: 'dashboard-container',

  initialize: function (options) {
    var sidebarView = new BowserBook.Views.DashboardSidebar({ 
      model: this.model 
    });
    var contentView = options.contentSubview;
    this.addSubview('.dashboard-sidebar-container', sidebarView);
    this.addSubview('.dashboard-content-container', contentView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  swapContent: function (subview) {
    this.removeSubview(
      '.dashboard-content-container', 
      this.subviews('.dashboard-content-container').first()
    ); // TODO: Create new composite view method for this?
    this.addSubview('.dashboard-content-container', subview);
  }
});