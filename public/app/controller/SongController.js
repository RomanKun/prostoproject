(function() {

	// "use strict";

	console.log("-- Start SongController.js ");

	Ext.define("App01.controller.SongController", {
		extend: "Ext.app.Controller",
		init: initSongController,
		onLaunch: launchSongController,
		onSongSelect: fireSongSelect,
		onStationStart: fireStationStart
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

	function launchSongController() {

		console.log("-- launchSongController. ");
		
	}


	function fireSongSelect() {

		console.log("-- fireSongSelect. ");

	}


	function fireStationStart() {

		console.log("-- fireStationStart. ");

	}

})();