define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],
  function(jQuery, _, Backbone) {

    var hostname = window.location.hostname;

    var dataURL;

    if ((hostname == "localhost" || hostname == "10.0.2.2")) {
        dataURL = 'data/data.json';
    } else {


        dataURL = "http://" + hostname + "/services/webproxy/?url=http://www.gannett-cdn.com/experiments/usatoday/2015/03/sunday-shows/data/data.json";

    }

    return {
        data: {},
        getData: function() {
            var _this = this;
            jQuery.getJSON(dataURL, function(data) {        
                _this.data = data;
                
                

                
                _.each(_this.data.people, function(dataObj) {
                    

                });

                console.log(_this.data);
                _this.organizeTags();
                Backbone.trigger("data:ready", this);

            });
        },
        organizeTags: function() {
            var _this = this;
            var tags = [];
            _this.data.filters = _.map(_this.data.filters, function(filter){
                tagObj =  {
                    tagName: _this.cleanTag(filter),
                    tagPretty: filter,
                    isNetwork: false
                };
                if (tagObj.tagName == 'abc' || tagObj.tagName == 'cnn' || tagObj.tagName == 'nbc' || tagObj.tagName == 'fox' || tagObj.tagName == 'univision' || tagObj.tagName == 'cbs') {
                    tagObj.isNetwork = true;
                }
                return tagObj;
            });
        },
        cleanTag: function(tagName) {
            return tagName.replace(/\n+/g, "-").toLowerCase();
        },
        userName: '',
        base_url: 'http://www.gannett-cdn.com/experiments/usatoday/2015/03/sunday-shows/img/'
    };


});
