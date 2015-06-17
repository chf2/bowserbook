BowserBook.Collections.Messages = Backbone.Collection.extend({
  url: '/api/messages',

  model: BowserBook.Models.Message,

  getOrFetch: function(id) {
    var collection = this;

    var message = collection.get(id);
    if (message) {
      message.fetch();
    } else {
      message = new BowserBook.Models.Message({ id: id });
      message.fetch({
        success: function () {
          collection.add(message);
        }
      });
    }

    return message;
  }
});