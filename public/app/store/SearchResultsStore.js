(function() {
	
	"use strict";

	console.log("-- Start SearchResultsStore.js ");

	Ext.define("App01.store.SearchResultsStore", {
		extend: "Ext.data.Store",
		requires: "App01.model.StationModel",
		model: "App01.model.StationModel",
		proxy: {
			type: "ajax",
			url: "data/searchresults.json",
			reader: {
				type: "json",
				root: "results"
			}
		}
	});

})();