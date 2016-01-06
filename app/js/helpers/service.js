'use strict';

var TardyService = (function(document, $) {

	var reloadPageWithHash = function(hash) {
		var initialPage = location.origin;
  	location.replace(initialPage + '/#' + hash);
		Tardy.init();
	};

	var displayErrorMessage = function(elem, data) {
		var template = $(elem).html();
		$('#error_target').html(_.template(template)(data));
	};

	return {
		reloadPageWithHash: reloadPageWithHash,
		displayErrorMessage: displayErrorMessage
	};

})(document, Zepto);
