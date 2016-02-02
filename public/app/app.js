(function() {

	"use strict";

	console.log("-- App is loading. ");

	Ext.application({
		name: "App",
		appFolder: "app",
		autoCreateViewport: true,

		models: [],
		stores: [],
		controllers: [],
		launch: appStart
	});

	function appStart() {
		console.log("-- app start. ");
	}

})();