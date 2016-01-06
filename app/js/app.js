'use strict';

var Tardy = (function(document, $) {
	var docElem = document.documentElement,
		API_URL = 'http://localhost:3000/api',
		userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		initRouter = function() {
			var handler = {
				teamIndex:		TardyTeam.index,
				teamShow: 		function(params){},
				unauthorized: TardyAjax.displayAuthErrorMessage
			};

			var router = new LightRouter({
				type: 'hash',
				handler: handler,
				pathRoot: '/',
				routes: {
					'': 							'teamIndex', // Base Url
					'/': 							'teamIndex', // Base Url
					'/team/{id}':			'teamShow', // Show a team with {id}
					'/unauthorized':	'unauthorized' // Ajax request was not authorized
				}
			});

			router.run();
		};
	return {
		init: initRouter,
		API_URL: API_URL
	};
})(document, Zepto);
