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
		Tardy.initRouter();
	};

	var displayErrorMessage = function(data) {
		var template = $('#error-message').html();
		$('#error_target').html(_.template(template)(data));
	};

	var displayView = function(view) {
		$('.content__element').addClass('hide');
		$(view).removeClass('hide');
	};

	return {
		init: init,
		redirectTo: reloadPageWithHash,
		displayErrorMessage: displayErrorMessage,
		hasLocalStorage: hasLocalStorage,
		displayView: displayView
	};

})(document, Zepto);
