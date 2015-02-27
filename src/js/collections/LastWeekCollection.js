  // Questions Collection
  // ---------------

define([
    "jquery",
    "underscore",
    "backbone",
    'models/dressModel',
], function($, _, Backbone, dressModel) {

   

    // The collection of questions is backed by json file
    return Backbone.Collection.extend({

      // Reference to this collection's model.
      model: dressModel,

    });

  });
