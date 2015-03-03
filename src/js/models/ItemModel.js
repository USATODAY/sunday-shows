define([
    "jquery",
    "underscore",
    "backbone"
], function($, _, Backbone) {
    return Backbone.Model.extend({
        defaults: {
            highlight: false,
            isLiked: false,
            isDisliked: false,
            tags: []
        },
        initialize: function() {
            this.set({'filteredAppearancesTotal': this.get('total_appearances')});
            this.set({'filteredAppearances': this.get('appearances')});
            this.listenTo(Backbone, 'filters:update', this.onFiltersUpdate);
        },
        onFiltersUpdate: function(filterArray, networkArray) {
            this.filterAppearancesByNetwork(networkArray);
        },

        filterAppearancesByNetwork: function(networkArray) {
            var totalAppearances = this.get('appearances');
            if (networkArray.length > 0) {
                var filteredAppearances = _.filter(totalAppearances, function(appearance) {
                    if (appearance.network !== undefined) {
                        return _.contains(networkArray, appearance.network.toLowerCase());
                    } else {
                        return false;
                    }
                });
                this.set({'filteredApperances': filteredAppearances});
                this.set({'filteredAppearancesTotal': filteredAppearances.length});
            } else {
                this.set({'filteredAppearances': totalAppearances, 'filteredAppearancesTotal': this.get('total_appearances')});
            }
        }

    });
});
