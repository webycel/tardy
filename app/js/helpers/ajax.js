'use strict';

var TardyAjax = (function(document, $) {

		var get = function(settings) {
			settings.error = setErrorHandler(settings.error);
			$.ajax(settings);
		};

		var errorHandler = function(xhr, type) {
			console.log(xhr, xhr.status, type);
			var template, error;

			if (xhr.status === 401) {
				// Unauthorized
				TardyService.reloadPageWithHash('/unauthorized');
				displayAuthErrorMessage();
			}

		};

		var setErrorHandler = function(s) {
			return function(xhr, type) {
				errorHandler(xhr, type, xhr.status);

				if (typeof s !== 'undefined') {
					s(xhr, type);
				}
			};
		};

		var displayAuthErrorMessage = function() {
			var error = {
				status: '401',
				message: 'You don\'t have permission to view this page or perform this action.'
			};
			TardyService.displayErrorMessage('#auth_error', error);
		};


	return {
		get: get,
		displayAuthErrorMessage: displayAuthErrorMessage
	};

})(document, Zepto);
