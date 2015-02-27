define([
    'jquery',
    'imagesloaded',
    'isotope',
    'analytics',
    'underscore',
    'lib/BackboneRouter',
    'templates',
    'models/config',
    'views/cardView',
    'views/detailView',
    'router',
    'unveil',
    'jquery_ui_touch_punch'
], 
    function(jQuery, imagesLoaded, Isotope, Analytics, _, Backbone, templates, config, cardView, detailView, router) {

        return Backbone.View.extend({

            initialize: function() {
                this.listenTo(this.collection, 'change:highlight', this.showDetail);
            },
            template: templates['lastWeekView.html'],
            render: function() {
                this.$el.html(this.template(this.collection.toJSON()));
                return this;
            }

        });

});
