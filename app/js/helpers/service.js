'use strict';

var TardyService = (function(document, $) {

	var localStorageSupport = false;

	var init = function() {
		if ($('html').hasClass('localstorage')) {
			localStorageSupport = true;
		}
	};

	var hasLocalStorage = function() {
		return localStorageSupport;
	};

	return {
		init: init,
		hasLocalStorage: hasLocalStorage,
	};

})(document, Zepto);
