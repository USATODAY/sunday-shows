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
                console.log(this.collection.toJSON()); 
                this.render();
                console.log(this);
            },
            className: 'iapp-last-week-wrap',
            template: templates['lastWeekView.html'],
            render: function() {
                this.sortCollection();
                console.log('sorted collection: ');
                console.log(this.sortedCollection);
                var _this = this;
                _.each(this.sortedCollection, function(networkArray) {
                    _this.$el.append(_this.template({networkGuests: networkArray}));
                });
                this.$('img').unveil(200);
                return this;
            },
            events: {
                'click .card': 'onCardClick'
            },
            sortCollection: function() {
                var sortedCollectionObj = {};
                this.collection.each(function(itemModel) {
                    console.log("itemModel: ");
                    console.log(itemModel);
                    _.each(itemModel.get('last_week_appearances'), function(_network) {
                        console.log(_network);
                        if (sortedCollectionObj[_network] === undefined) {
                            sortedCollectionObj[_network] = [];
                        }
                        var appearancePersonObj = itemModel.toJSON();
                        appearancePersonObj.last_week_network = _network;
                        sortedCollectionObj[_network].push(appearancePersonObj);
                    });
                });
                this.sortedCollection = sortedCollectionObj;
            },
            showDetail: function(model) {
            
              if(model.get('highlight')) {
                this.detailView =  new detailView({model: model});
                this.$el.append(this.detailView.render().el);
              }
            },
            onCardClick: function(e) {
                console.log(e.currentTarget);
                var $target = $(e.currentTarget);
                var guest = $target.find('.iapp-card-info-header').text();
                var model = this.collection.find(function(model){
                    return model.get('guest') == guest;
                });
                console.log(model);
                model.set({'highlight': true});
            }

        });

});
