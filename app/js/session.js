'use strict';

var TardySession = (function(document, $) {

	var user = null;

	var init = function() {
		getAuthData();

		$('#login-form').submit(login);
	};

	var login = function(e) {
		e.preventDefault();

		var form = $(this).serializeArray(),
				data = { email: form[0].value, password: form[1].value };

		var ajaxSettings = {
			type: 'POST',
			url: Tardy.API_URL + '/sessions',
			data: data,
			dataType: 'application/json',
			success: loginSuccess
		};

		TardyAjax.send(ajaxSettings);
	};

	var make_base_auth = function (user, password) {
    var tok = user + ':' + password;
    var hash = btoa(tok);
    return "Basic " + hash;
  }

	var loginSuccess = function(data) {
		if (TardyService.hasLocalStorage) {
			localStorage.setItem('user', data);
		}
	};

	var getAuthData = function() {
		var auth = JSON.parse(localStorage.getItem('user'));
		user = auth.user;
		console.log(user);
	};

	var getUser = function() {
		return user;
	};

	return {
		init: init,
		getUser: getUser
	};
})(document, Zepto);
