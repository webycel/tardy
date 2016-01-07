'use strict';

var TardyAjax = (function(document, $) {

		var send = function(settings) {
			settings.error = setErrorHandler(settings.error);
			$.ajax(settings);
		};

		var errorHandler = function(xhr, type) {
			var template, error;

			if (xhr.status === 401) {
				// Unauthorized
				displayAuthErrorMessage();

				if (!TardySession.getUser()) {
					TardyService.redirectTo('/login');
				}
			} else if (xhr.status === 422) {
				// Unprocessable Entity (invalid login)
				TardyService.displayErrorMessage(JSON.parse(xhr.response));
			}

		};

		var setErrorHandler = function(s) {
			return function(xhr, type) {
				errorHandler(xhr, type, xhr.status);

				if (!_.isUndefined(s)) {
					s(xhr, type);
				}
			};
		};

		var displayAuthErrorMessage = function() {
			var error = {
				status: '401',
				errors: 'You don\'t have permission to view this page or perform this action.'
			};
			TardyService.displayErrorMessage(error);
		};


	return {
		send: send,
		displayAuthErrorMessage: displayAuthErrorMessage
	};

})(document, Zepto);
