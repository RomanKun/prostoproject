(function() {

	// "use strict";

	console.log("-- Start RecentSongsStore.js ");

	Ext.define("App01.store.RecentSongsStore", {
		extend: "Ext.data.Store",
		model: "App01.model.SongModel",
		requires: "App01.model.SongModel",
		initComponent: initRecentSongsStore
	});


	function initRecentSongsStore() {

		console.log("-- initRecentSongsStore. ");
		
	}

})();