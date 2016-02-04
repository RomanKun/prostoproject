(function() {
	
	"use strict";

	console.log("-- Start StationModel.js ");

	Ext.define("App01.model.StationModel", {
		extend: "Ext.data.Model",
		fields: [
		"id", 
		"name",
		"played_date"
		],
		proxy: {
			type: "ajax",
			url: "data/stations.json",
			reader: {
				type: "json",
				root: "results"
			}
		}
	});
	
})();