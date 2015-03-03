//Master AppView module. All other views are children of this view

define([
  'jquery',
  'imagesloaded',
  'isotope',
  'api/analytics',
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
  'views/LastWeekView',
  'collections/ItemsCollection',
  'collections/LastWeekCollection',
  'router',
  'dataManager',
  'jquery_ui_touch_punch'
  ], 
  function(jQuery, imagesLoaded, Isotope, Analytics, _, Backbone, templates, config, MenuModel, ShareModel, detailView, CardsView, MenuView, ShareView, LastWeekView, ItemsCollection, LastWeekCollection, router, dataManager) {

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
      this.itemsCollection = new ItemsCollection(dataManager.data.people); 
      this.cardsView = new CardsView({collection: this.itemsCollection});
      this.lastWeekCollection = new LastWeekCollection(this.itemsCollection.where({'last_week': true}));
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
        Analytics.trackEvent('Begin button clicked');
        this.$('.iapp-begin-button').addClass('iapp-transition-out');
        this.$('.iapp-intro-wrap').fadeOut();
    },

    onRouteLastWeek: function() {
        Analytics.trackEvent('Last week guests page viewed');
        this.$el.addClass('iapp-last-week-route');
        this.menuView.model.set({'isMenuOpen': false});
    }
    
  });

});
