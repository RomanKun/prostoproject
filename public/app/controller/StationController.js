(function() {

	// "use strict";

	console.log("-- Start StationController.js ");

	Ext.define("App01.controller.StationController", {
		extend: "Ext.app.Controller",
		init: initStationController,
		onStationSelect: fireStationSelect,
		initComponent: initStationController2
	});


	function initStationController2() {

		console.log("-- initStationController2. ");
		
	}


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