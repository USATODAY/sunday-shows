 define([
  "jquery",
  "underscore",
  'lib/BackboneRouter',
  ], 
  function($, _, Backbone) { 
    var Router = Backbone.Router.extend({

      routes: {
        "": "home",
        'likes/:likestring': 'like',
        'dislikes/:dislikestring': 'dislike',
        'likes/:likestring/dislikes/:dislikestring': 'both',
        'last-week/': 'lastWeek'
        
      },

      home: function() {
         this.trigger("homeRoute");
      },


      lastWeek: function() {
        Backbone.trigger('route:last-week');
      }

    });

   _.extend(Router, Backbone.Events);

   return new Router();
});
