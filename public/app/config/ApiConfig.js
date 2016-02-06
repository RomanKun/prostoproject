(function() {

	// "use strict";

	console.log("-- Start ApiConfig.js ");

	Ext.define("App01.config.ApiConfig", {
		xtype: "component",
		initComponent: initApiConfig,
		api: {
			searchresults: "/public/data/searchresults.json",
			songs: "/public/data/songs.json",
			stations: "/public/data/stations.json"
		}
	});


	function initApiConfig() {

		console.log("-- initApiConfig. ");

	}

})();