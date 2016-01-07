'use strict';

var Tardy = (function(document, $) {

	var docElem = document.documentElement,
		API_URL = 'http://localhost:3000/api',

		userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},

		init = function() {
			TardyService.init()
			TardySession.init()

			initRouter();
		},

		initRouter = function() {
			var handler = {
				teamIndex:		TardyTeam.index,
				teamShow: 		function(params){},
				loginInit: TardySession.loginInit
			};

			var router = new LightRouter({
				type: 'hash',
				handler: handler,
				pathRoot: '/',
				routes: {
					'': 							'teamIndex', // Base Url
					'/': 							'teamIndex', // Base Url
					'/team/{id}':			'teamShow', // Show a team with {id}
					'/login':	'loginInit' // Login
				}
			});

			router.run();
		};

	return {
		init: init,
		initRouter: initRouter,
		API_URL: API_URL
	};

})(document, Zepto);
