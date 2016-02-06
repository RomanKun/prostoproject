(function() {
	
	// "use strict";

	console.log("-- Start SearchResultsStore.js ");

	Ext.define("App01.store.SearchResultsStore", {
		extend: "Ext.data.Store",
		requires: ["App01.model.StationModel"],
		model: "App01.model.StationModel",
		initComponent: initSearchResultsStore,
		proxy: {
			type: "ajax",
			url: (function() {
				var rest = Ext.create("App01.config.ApiConfig");
				return rest.api.searchresults
			})(),
			reader: {
				type: "json",
				root: "results"
			}
		}
	});


	function initSearchResultsStore() {

		console.log("-- initSearchResultsStore. ");
		
	}

})();