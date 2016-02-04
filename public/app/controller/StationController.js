(function() {

	"use strict";

	console.log("-- Start StationController.js ");

	Ext.define("App01.controller.StationController", {
		extend: "Ext.app.Controller",
		init: initStationController,
		onStationSelect: fireStationSelect
	});


	function initStationController() {

		console.log("-- initStationController. ");

		this.control({
			"stationlist": {
				selectionchange: this.onStationSelect
			},
			"newstation": {
				select: this.onNewStationSelect
			}
		});
	}


	function fireStationSelect(selModel, selection) {

		console.log("-- fireStationSelect. ");
		console.log("-- selModel = ", selModel);
		console.log("-- selection = ", selection);

		this.application.fireEvent("stationstart", selection[0]);

	}

})();