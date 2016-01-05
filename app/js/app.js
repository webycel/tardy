'use strict';

var Tardy = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			
		};
	return {
		init: _init
	};
})(document, Zepto);

(function() {
	Tardy.init();
})();
