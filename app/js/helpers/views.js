'use strict';

var TardyViews = (function(document, $) {

	var init = function() {

	};

	var redirectTo = function(hash) {
		var initialPage = location.origin;
  	location.replace(initialPage + '/#' + hash);
		Tardy.initRouter();
	};

	var displayErrorMessage = function(data) {
		templateContent('#error-message-template', '#error__target', data);
	};

	var templateContent = function(source, target, data) {
		var template = $(source).html();
		$(target).html(_.template(template)(data));
	};

	var displayView = function(view) {
		$('.content__element').addClass('hide');
		$(view).removeClass('hide');
	};

	return {
		init: init,
		redirectTo: redirectTo,
		displayErrorMessage: displayErrorMessage,
		displayView: displayView,
		templateContent: templateContent
	};

})(document, Zepto);
