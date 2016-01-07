'use strict';

var TardyTeam = (function(document, $) {

	var index = function() {

		var user = TardySession.getUser();

		if (user) {

			var ajaxSettings = {
				type: 'GET',
				url: Tardy.API_URL + '/users/' + user.id + '/teams',
				dataType: 'json',
				headers: {
					'Authorization': user.auth_token
				},
				success: indexAjaxSuccess
			};

			TardyAjax.send(ajaxSettings);

		} else {
			showAll();
		}

	};

	var showAll = function() {

	};

	var indexAjaxSuccess = function(data) {
		console.log(data.teams);

		TardyViews.templateContent('#teams-template', '#teams__target', data);

		TardyViews.displayView('#teams');
	};

	return {
		index: index
	};
})(document, Zepto);
