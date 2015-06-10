BowserBook.Views.Nav = Backbone.View.extend({
  template: JST['navbar/nav'],

  className: "navbar-container",

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.$el.find('#sign_out_auth_token')
            .val($('meta[name=csrf-token]').attr('content'));
    return this;
  }
})