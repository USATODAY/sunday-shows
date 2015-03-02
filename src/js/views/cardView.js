define([
    "jquery",
    "underscore",
    "backbone",
    "analytics",
    "templates"
  ],
  function(jQuery, _, Backbone, Analytics, templates) {

    return Backbone.View.extend({
      tagName: "div",

      initialize: function() {
        
          this.listenTo(this.model, 'change:filteredAppearancesTotal', this.onAppearancesChange);
      },

      className: function() {
        var tags = this.model.get("tags");
        var classes = "card small-card";
        _.each(tags, function(tag) {
          var tagClass = tag;
          
          classes += (" " + tagClass);
        });
        return classes;
      },

      events: {
        "click": "setHighlight",
        'click .iapp-like-button': 'onLikeClick',
        'click .iapp-dislike-button': 'onDislikeClick'
      },

      template: templates["card-front.html"],

      render: function() {
        this.$el.attr('data-appearances', this.model.get('filteredAppearancesTotal'));
        this.$el.html(this.template(this.model.toJSON()));

        return this;
      },

      setHighlight: function() {
        Analytics.click("opened card");
        this.model.set({
          "highlight": true
        });
      },

      onAppearancesChange: function() {
        this.$el.attr('data-appearances', this.model.get('filteredAppearancesTotal'));
        this.$('.iapp-card-front-number-inner').text(this.model.get('filteredAppearancesTotal'));
      }
    });

  });
