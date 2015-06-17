BowserBook.Views.FeedContent = Backbone.CompositeView.extend({
  template: JST['feed/content'],

  initialize: function () {
    this.collection = new BowserBook.Collections.Posts();
    this.collection.fetch({
      data: { feed: true }
    });
    this.listenTo(this.collection, 'sync', this.render);
    var feedWallView = new BowserBook.Views.Wall({
      model: this.model,
      collection: this.collection,
      user: this.model
    });
    this.addSubview('.feed-wall-container', feedWallView)
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});