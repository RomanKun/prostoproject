(function() {
	
	"use strict";

	console.log("-- Start app01.js ");

	Ext.application({
		name: "App01",
		autoCreateViewport: true,
		models: [
		"StationModel",
		"SongModel"
		],
		stores: [
		"StationsStore",
		"RecentSongsStore",
		"SearchResultsStore"
		],
		controllers: [
		"StationController",
		"SongController"
		],
		launch: launchApp01
	});

	function launchApp01() {
		console.log("-- launchApp01. ");
		this.callParent();
	}

})();