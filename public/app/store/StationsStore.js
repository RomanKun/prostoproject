(function() {

	// "use strict";

	console.log("-- Start StationsStore.js ");

	Ext.define("App01.store.StationsStore", {
		extend: "Ext.data.Store",
		requires: "App01.model.StationModel",
		model: "App01.model.StationModel",
		initComponent: initStationsStore
	});


	function initStationsStore() {
		
		console.log("-- initStationsStore. ");

	}

})();