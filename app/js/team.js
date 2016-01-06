'use strict';

var TardyTeam = (function(document, $) {

		var index = function() {

			var ajaxSettings = {
				type: 'GET',
				url: Tardy.API_URL + '/users/1/teams',
				dataType: 'json',
				context: $('body'),
				success: indexAjaxSuccess
			};

			TardyAjax.get(ajaxSettings);

		};

		var indexAjaxSuccess = function(data) {
			console.log('success, yes!');
		};

	return {
		index: index
	};
})(document, Zepto);
