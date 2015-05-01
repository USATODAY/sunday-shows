define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app-view.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-project-info-wrap">\n    <h1 class="iapp-page-header">' +
((__t = ( header )) == null ? '' : __t) +
'</h1>\n    <p class="iapp-page-chatter">' +
((__t = ( chatter )) == null ? '' : __t) +
' ' +
((__t = ( contact_chatter )) == null ? '' : __t) +
' <a href=\'mailto:' +
((__t = (contact_email)) == null ? '' : __t) +
'\'>' +
((__t = (contact_email)) == null ? '' : __t) +
'</a>. </p>\n    <p class="iapp-page-chatter">Last updated on: ' +
((__t = (last_updated )) == null ? '' : __t) +
'</p>\n    <div class="iapp-share-wrap"></div>\n     <div class="switch">\n        <label>\n            <input type="radio" class=\'iapp-last-week-radio\' name=\'last-week\' checked>\n            <div class="iapp-toggle-name">\n                2015 guests\n            </div>\n        </label>\n        <label>\n            <input type="radio" class=\'iapp-last-week-radio\' name=\'last-week\'>\n            <div class="iapp-toggle-name">\n                Last sunday\n            </div>\n        </label>\n    </div>\n    <div class="iapp-search-wrap"></div>\n</div>\n<div class="no-results-wrap">\n    <div class=\'no-results-message alert alert-danger\'><strong>No results!</strong> Try searching for another guest.</div>\n</div>\n<div class="iapp-menu"></div>\n<div id="card-wrap" class="iapp-card-wrap"></div>\n\n<div class="iapp-intro-wrap">\n    <div class="iapp-intro-content-wrap">\n        <div class="iapp-intro-icon-wrap">\n            <!-- <div class="iapp&#45;intro&#45;icon"><img src="img/tv&#45;icon&#45;white.svg" alt=""></div> -->\n            <div class="iapp-intro-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/sunday-shows/img/tv-icon-blue.svg" alt=""></div>\n        </div> <!-- end iapp-intro-icon-wrap -->\n        <div class="iapp-intro-info">\n            <h2 class="iapp-intro-header">' +
((__t = ( header )) == null ? '' : __t) +
'</h2>\n            <p class="iapp-intro-chatter">' +
((__t = ( chatter )) == null ? '' : __t) +
'</p>\n            <div class="iapp-button iapp-begin-button iapp-clickable"><div class="iapp-button-text">Begin</div></div>\n        </div> <!-- end iapp-intro-info -->\n    </div> <!-- end iapp-intro-content-wrap -->\n</div> <!-- end iapp-intro-wrap -->\n\n<div class="iapp-end-modal-wrap"></div>\n\n';

}
return __p
};

this["templates"]["card-back.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n      <div class="card card-detail">\n      \n        <div class="iapp-detail-image-wrap">\n        </div>\n      \n        <div class="close-card">\n            <img class="iapp-close-card-inner" src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/close-icon.svg">\n            \n            </img>\n        </div>\n      \n      \n      \n        <div class="iapp-detail-info">\n            <h2 class="card-back-header">' +
((__t = ( guest )) == null ? '' : __t) +
' </h2>\n            <p class="iapp-summary">' +
((__t = (description)) == null ? '' : __t);
 if (category == "house" || category =="senate") { ;
__p += ', ';
 print(party.charAt(0).toUpperCase() + party.slice(1));
__p += ', ' +
((__t = (state)) == null ? '' : __t);
 } ;
__p += '</p>\n            <table class="table">\n                \n            ';
 _.each(appearances, function(appearance) { ;
__p += '\n                <tr class="iapp-card-back-detail-appearance">\n                    <td class="iapp-card-back-detail-appearance-date">' +
((__t = (appearance.date)) == null ? '' : __t) +
'</td><td class="iapp-card-back-detail-appearance-network">' +
((__t = (showNames[appearance.network])) == null ? '' : __t) +
'</td><td>' +
((__t = (appearance.network)) == null ? '' : __t) +
'</td><td class="iapp-card-back-detail-description">' +
((__t = (appearance.description)) == null ? '' : __t) +
'</td>\n                </tr>\n            \n            ';
});
__p += '\n\n            </table>\n        </div>\n      \n      \n      </div>\n      \n        <div class="iapp-detail-bg"></div> \n\n';

}
return __p
};

this["templates"]["card-front.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-card-info">\n    <h2 class="iapp-card-info-header">' +
((__t = ( guest)) == null ? '' : __t) +
'</h2>\n    <p class="iapp-card-info-text">' +
((__t = (description)) == null ? '' : __t) +
'</p>\n    ';
 if (category == "house" || category =="senate") { ;
__p += '\n    <p class="iapp-card-info-text">';
 print(party.charAt(0).toUpperCase() + party.slice(1));
__p += ', ' +
((__t = (state)) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n    \n</div>\n<div class="iapp-card-front-image-wrap">\n    <div class="iapp-card-front-number">\n       <div class="iapp-card-front-number-inner ">\n           ' +
((__t = (filteredAppearancesTotal)) == null ? '' : __t) +
'\n       </div>\n       <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/sunday-shows/img/tv-icon-empty.svg" alt="" />\n   </div>\n</div>\n';
 if (filteredAppearancesTotal !== 1) {;
__p += '\n<p>appearances</p>\n';
 } else {;
__p += '\n<p>appearance</p>\n';
 } ;
__p += '\n';

}
return __p
};

this["templates"]["lastWeekView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class=\'iapp-last-week-entry\'>\n    <h2 class=\'iapp-last-week-header\'><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/03/sunday-shows/img/';
 print(networkGuests[0].last_week_network.toLowerCase());
__p += '.png" alt="' +
((__t = (networkGuests[0].last_week_network )) == null ? '' : __t) +
'" class="iapp-last-week-network-logo" /></h2>\n    <h2 class="iapp-last-week-header">' +
((__t = (networkGuests[0].showNames[networkGuests[0].last_week_network])) == null ? '' : __t) +
'</h2>\n    ';
 _.each(networkGuests, function(guestObj) { ;
__p += '\n        <div class="card small-card">\n            \n            <div class="iapp-card-info">\n                <h2 class="iapp-card-info-header">' +
((__t = ( guestObj.guest)) == null ? '' : __t) +
'</h2>\n                <p class="iapp-card-info-text">' +
((__t = (guestObj.description)) == null ? '' : __t) +
'</p>\n            </div>\n        </div>\n    ';
 });
__p += '\n</div>\n';

}
return __p
};

this["templates"]["menu.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-menu-panel">\n    \n    \n    <h3 class="iapp-menu-header iapp-menu-header-filters">Filters</h3>\n    <div class="iapp-filters-wrap"></div> \n</div>\n\n<div class="iapp-menu-control-area">\n    <div class="iapp-menu-button iapp-button iapp-button-blue iapp-clickable"><div class="iapp-button-text">Filters</div></div>\n    <!-- <div class="iapp&#45;top&#45;button iapp&#45;button iapp&#45;button&#45;blue iapp&#45;clickable"><div class="iapp&#45;button&#45;text">Top</div></div> -->\n    <div class="iapp-menu-close iapp-button iapp-clickable"><div class="iapp-button-text">Close Menu</div></div>\n    <div class="iapp-reset-button iapp-button iapp-clickable"><div class="iapp-button-text">Reset</div></div>\n    <div class="iapp-menu-scoreboard">\n\n        <div class="iapp-menu-scoreboard-likes">\n            <span class="iapp-menu-scoreboard-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/like.svg" alt="like"></span>\n            <div class="iapp-menu-scoreboard-scrore-wrap">\n                <span class="iapp-menu-scoreboard-score iapp-menu-scoreboard-score-number">' +
((__t = (numlikes)) == null ? '' : __t) +
'</span><span class="iapp-menu-scoreboard-score iapp-menu-scoreboard-score-total">/10</span>\n            </div>\n        </div>\n        <div class="iapp-menu-scoreboard-dislikes">\n            \n            <span class="iapp-menu-scoreboard-icon"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/dislike.svg" alt="like"></span> \n            <div class="iapp-menu-scoreboard-scrore-wrap">\n                <span class="iapp-menu-scoreboard-score iapp-menu-scoreboard-score-total">/10</span>\n                <span class="iapp-menu-scoreboard-score iapp-menu-scoreboard-score-number">' +
((__t = (numdislikes)) == null ? '' : __t) +
'</span> \n            </div>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["search.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="search-wrap-container">\n    <div class="search-wrap input-group input-group-lg">\n        <input type="text" name="search-box" class="iapp-search-input form-control" id="iapp-search-input" value="" placeholder="search for a guest" />\n        <span class="iapp-search-button input-group-btn iapp-clickable"><button type="button" class="btn btn-default">search</button></span>\n    </div>\n</div>\n';

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
'" id="Twitter Share" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/twitter.svg" alt="Twitter share"></a>\n    <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'" id="Facebook Share" class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/fb.svg" alt="Facebook share"></a>\n    <a href="' +
((__t = (email_link)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-email"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/02/red-carpet/img/email.svg" id="Email Share" alt="Email share"></a>\n</div>\n';

}
return __p
};

this["templates"]["tags.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3 class="filter-title">Occupation</h3>\n<div class="occupation-filters"></div>\n<h3 class="filter-title">Race</h3>\n<div class="race-filters"></div>\n<h3 class="filter-title">Gender</h3>\n<div class="gender-filters"></div>\n<h3 class="filter-title">Network</h3>\n<div class="network-filters"></div>\n<h3 class="filter-title">Party</h3>\n<div class="party-filters"></div>\n';

}
return __p
};

  return this["templates"];

});