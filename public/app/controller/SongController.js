(function() {

	"use strict";

	console.log("-- Start SongController.js ");

	Ext.define("App01.controller.SongController", {
		extend: "Ext.app.Controller",
		init: initSongController
	});


	function initSongController() {

		console.log("-- initSongController. ");

		this.control({
			"recentlyplayedscroller": {
				selectionchange: this.onSongSelect
			}
		});

		this.application.on({
			stationstart: this.onStationStart,
			scope: this
		});

	}

})();