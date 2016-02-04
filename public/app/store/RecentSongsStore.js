(function() {

	"use strict";

	console.log("-- Start RecentSongsStore.js ");

	Ext.define("App01.store.ResentSongsStore", {
		extend: "Ext.data.Store",
		model: "App01.model.SongModel",
		requires: "App01.model.SongModel"
	});

})();