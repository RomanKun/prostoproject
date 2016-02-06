(function() {
	
	// "use strict";

	console.log("-- Start StationModel.js ");

	var rest = Ext.create("App01.config.ApiConfig");

	Ext.define("App01.model.StationModel", {
		extend: "Ext.data.Model",
		fields: [
		"id", 
		"name",
		"played_date"
		],
		initComponent: initStationModel,
		proxy: {
			type: "ajax",
			url: rest.api.stations,
			reader: {
				type: "json",
				root: "results"
			}
		}
	});


	function initStationModel() {

		console.log("-- initStationModel. ");
		
	}
	
})();