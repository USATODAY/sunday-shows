define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app-view.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-project-info-wrap">\n    <h1 class="iapp-page-header">Sunday talk shows</h1>\n    <p class="iapp-page-chatter">Talk show guests</p>\n\n    <p class="iapp-share-chatter">Your friend\'s choices are below. Press reset to select your favorites.</p>\n    <div class="iapp-share-wrap"></div>\n</div>\n<div class="iapp-menu"></div>\n<div id="card-wrap" class="iapp-card-wrap"></div>\n\n<div class="iapp-intro-wrap">\n    <div class="iapp-intro-content-wrap">\n        <div class="iapp-intro-icon-wrap">\n            <!-- <div class="iapp&#45;intro&#45;icon"><img src="img/tv&#45;icon&#45;white.svg" alt=""></div> -->\n            <div class="iapp-intro-icon"><img src="img/tv-icon-blue.svg" alt=""></div>\n        </div> <!-- end iapp-intro-icon-wrap -->\n        <div class="iapp-intro-info">\n            <h2 class="iapp-intro-header">Sunday talk shows</h2>\n            <p class="iapp-intro-chatter">Talk show guests</p>\n            <div class="iapp-button iapp-begin-button iapp-clickable"><div class="iapp-button-text">Begin</div></div>\n        </div> <!-- end iapp-intro-info -->\n    </div> <!-- end iapp-intro-content-wrap -->\n</div> <!-- end iapp-intro-wrap -->\n\n<div class="iapp-end-modal-wrap"></div>\n\n';

}
return __p
};

this["templates"]["card-back.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n      <div class="card card-detail">\n      \n        <div class="iapp-detail-image-wrap">\n            <img src="' +
((__t = (photo_url)) == null ? '' : __t) +
'" alt="' +
((__t = (guest)) == null ? '' : __t) +
'" class="iapp-detail-image">\n        </div>\n      \n        <div class="close-card"></div>\n      \n      \n      \n        <div class="iapp-detail-info">\n            <h2 class="card-back-header">' +
((__t = ( guest )) == null ? '' : __t) +
' </h2>\n            <p class="iapp-summary">' +
((__t = (description)) == null ? '' : __t) +
'</p>\n            ';
 _.each(appearances, function(appearance) { ;
__p += '\n                <div class="iapp-card-back-detail-appearance">\n                    <span class="iapp-card-back-detail-appearance-date">' +
((__t = (appearance.date)) == null ? '' : __t) +
'</span><span class="iapp-card-back-detail-appearance-network">' +
((__t = (appearance.network)) == null ? '' : __t) +
'</span>\n                </div>\n            \n            ';
});
__p += '\n            <p class="iapp-card-back-photo-credit">' +
((__t = (photo_credit)) == null ? '' : __t) +
'</p>\n        </div>\n      \n      \n      </div>\n      \n        <div class="iapp-detail-bg"></div> \n\n';

}
return __p
};

this["templates"]["card-front.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-card-front-image-wrap">\n    <img class="cover-img" src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/load.png" data-src=\'' +
((__t = (photo_url)) == null ? '' : __t) +
'\'alt="' +
((__t = (guest)) == null ? '' : __t) +
'">\n    <div class="iapp-card-front-number">\n       <div class="iapp-card-front-number-inner ">\n           ' +
((__t = (total_appearances)) == null ? '' : __t) +
'\n       </div>\n    </div>\n</div>\n<div class="iapp-card-info">\n    <h2 class="iapp-card-info-header">' +
((__t = ( guest)) == null ? '' : __t) +
'</h2>\n    <p class="iapp-card-info-text">' +
((__t = (description)) == null ? '' : __t) +
'</p>\n    <p class="iapp-card-info-photo-credit">' +
((__t = ( photo_credit)) == null ? '' : __t) +
'</p>\n    \n</div>\n';

}
return __p
};

this["templates"]["lastWeekView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class=\'iapp-last-week-entry\'>\n    <h2 class=\'iapp-last-week-header\'>' +
((__t = (networkGuests[0].last_week_network)) == null ? '' : __t) +
'</h2>\n    ';
 _.each(networkGuests, function(guestObj) { ;
__p += '\n        <div class="card small-card">\n            \n            <div class="iapp-card-front-image-wrap">\n                <img class="cover-img" src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/load.png" data-src=\'' +
((__t = (guestObj.photo_url)) == null ? '' : __t) +
'\'alt="' +
((__t = (guestObj.guest)) == null ? '' : __t) +
'">\n            </div>\n            <div class="iapp-card-info">\n                <h2 class="iapp-card-info-header">' +
((__t = ( guestObj.guest)) == null ? '' : __t) +
'</h2>\n                <p class="iapp-card-info-text">' +
((__t = (guestObj.description)) == null ? '' : __t) +
'</p>\n                <p class="iapp-card-info-photo-credit">' +
((__t = ( guestObj.photo_credit)) == null ? '' : __t) +
'</p>\n                \n            </div>\n        </div>\n    ';
 });
__p += '\n</div>\n';

}
return __p
};

this["templates"]["menu.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-menu-panel">\n    \n    \n    <h3 class="iapp-menu-header iapp-menu-header-filters">Filters</h3>\n    <div class="iapp-filters-wrap"></div> \n</div>\n\n<div class="iapp-menu-control-area">\n    <div class="iapp-menu-button iapp-clickable"><div class="iapp-button-text">Filters</div></div>\n    <div class="iapp-top-button iapp-clickable"><div class="iapp-button-text">Top</div></div>\n    <div class="iapp-menu-close iapp-clickable"><div class="iapp-button-text">Close Menu</div></div>\n    <div class="iapp-reset-button iapp-clickable"><div class="iapp-button-text">Reset</div></div>\n    <div class="iapp-menu-scoreboard">\n\n        <div class="iapp-menu-scoreboard-likes">\n            <span class="iapp-menu-scoreboard-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/like.svg" alt="like"></span>\n            <div class="iapp-menu-scoreboard-scrore-wrap">\n                <span class="iapp-menu-scoreboard-score iapp-menu-scoreboard-score-number">' +
((__t = (numlikes)) == null ? '' : __t) +
'</span><span class="iapp-menu-scoreboard-score iapp-menu-scoreboard-score-total">/10</span>\n            </div>\n        </div>\n        <div class="iapp-menu-scoreboard-dislikes">\n            \n            <span class="iapp-menu-scoreboard-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/dislike.svg" alt="like"></span> \n            <div class="iapp-menu-scoreboard-scrore-wrap">\n                <span class="iapp-menu-scoreboard-score iapp-menu-scoreboard-score-total">/10</span>\n                <span class="iapp-menu-scoreboard-score iapp-menu-scoreboard-score-number">' +
((__t = (numdislikes)) == null ? '' : __t) +
'</span> \n            </div>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["share-end.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-end-modal-wrap-content">\n    <div class="iapp-end-modal-close"></div>\n    <div class="iapp-end-modal-content">\n        <h3 class="iapp-end-header">' +
((__t = (endHeader)) == null ? '' : __t) +
'</h3>\n        <p class="iapp-end-chatter">' +
((__t = (endBody)) == null ? '' : __t) +
'</p>\n    </div>\n    <div class="iapp-share-buttons">\n        <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/twitter.svg" alt="Twitter share"></a>\n        <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/fb.svg" alt="Facebook share"></a>\n        <a href="' +
((__t = (email_link)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-email"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/email.svg" alt="Email share"></a>\n    </div>\n</div>\n\n<div class="iapp-end-modal-bg"></div>';

}
return __p
};

this["templates"]["share.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-share-buttons">\n    <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/twitter.svg" alt="Twitter share"></a>\n    <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/fb.svg" alt="Facebook share"></a>\n    <a href="' +
((__t = (email_link)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-email"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/email.svg" alt="Email share"></a>\n</div>';

}
return __p
};

this["templates"]["tags.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(tags, function(tag) {
  var tagClass;
    tag == ":(" ? tagClass="sad" : tagClass = tag.toLowerCase().replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g,"").replace(/\s+/g, "-");
    
  ;
__p += '\n\n<div class="iapp-filter-button" data-filter="' +
((__t = ( tagClass )) == null ? '' : __t) +
'">' +
((__t = ( tag )) == null ? '' : __t) +
'</div>\n\n\n';
 }); ;
__p += '\n\n<div class="iapp-filter-button-clear">Clear Filters</div>';

}
return __p
};

  return this["templates"];

});