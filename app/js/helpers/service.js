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

	var reloadPageWithHash = function(hash) {
		var initialPage = location.origin;
  	location.replace(initialPage + '/#' + hash);
		Tardy.init();
	};

	var displayErrorMessage = function(data) {
		var template = $('#error-message').html();
		$('#error_target').html(_.template(template)(data));
	};

	return {
		init: init,
		reloadPageWithHash: reloadPageWithHash,
		displayErrorMessage: displayErrorMessage,
		hasLocalStorage: hasLocalStorage
	};

})(document, Zepto);
