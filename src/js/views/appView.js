//Master AppView module. All other views are children of this view

define([
  'jquery',
  'imagesloaded',
  'isotope',
  'analytics',
  'underscore',
  'lib/BackboneRouter',
  'templates',
  'models/config',
  'models/menuModel',
  'models/shareModel',
  'views/detailView',
  'views/cardsView',
  'views/menuView',
  'views/shareView',
  'views/endView',
  'views/LastWeekView',
  'collections/DressCollection',
  'collections/LastWeekCollection',
  'router',
  'dataManager',
  'jquery_ui_touch_punch'
  ], 
  function(jQuery, imagesLoaded, Isotope, Analytics, _, Backbone, templates, config, MenuModel, ShareModel, detailView, CardsView, MenuView, ShareView, EndView, LastWeekView, DressCollection, LastWeekCollection, router, dataManager) {

  return Backbone.View.extend({
    el: ".iapp-page-wrap",
    events: {
      'click .iapp-begin-button': 'onBeginClick' 
    },

    initialize: function() {
      this.listenTo(Backbone, 'route:last-week', this.onRouteLastWeek);
      this.listenTo(Backbone, 'route:share', this.onRouteShare);
      this.listenTo(Backbone, 'data:ready', this.onDataReady);
      this.listenTo(Backbone, 'app:reset', this.onAppReset);
      this.render();
      
    },
    

    template: templates["app-view.html"], 

    render: function() {
      this.$el.html(this.template({}));
      
    },

    addSubViews: function() {
      this.shareModel = new ShareModel();
      this.shareView = new ShareView({model: this.shareModel});
      this.menuView = new MenuView({model: new MenuModel()});
      this.dressCollection = new DressCollection(dataManager.data.people); 
      this.cardsView = new CardsView({collection: this.dressCollection});
      this.lastWeekCollection = new LastWeekCollection(this.dressCollection.where({'last_week': true}));
      this.lastWeekView = new LastWeekView({collection: this.lastWeekCollection});
      this.$el.append(this.lastWeekView.el);
      Backbone.history.start();
    },

    onDataReady: function() {
      this.addSubViews();
    },

    onMenuClick: function() {
      Backbone.trigger('menu:show');
    },

    onRouteShare: function() {
      this.$el.addClass('iapp-share-route');
    },

    onAppReset: function() {
      this.$el.removeClass('iapp-last-week-route');
    },

    onBeginClick: function() {
        this.$('.iapp-begin-button').addClass('iapp-transition-out');
        _.delay(function() {
            this.$('.iapp-intro-wrap').fadeOut();
        }, 500);
    },

    onRouteLastWeek: function() {
        this.$el.addClass('iapp-last-week-route');
        this.menuView.model.set({'isMenuOpen': false});
    }
    
  });

});
