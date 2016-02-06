(function() {

	// "use strict";

	console.log("-- Start SongModel.js");

	var rest = Ext.create("App01.config.ApiConfig");

	Ext.define("App01.model.SongModel", {
		extend:"Ext.data.Model",
		fields: [
		"id",
		"name",
		"artist",
		"album",
		"played_date",
		"station"
		],
		initComponent: initSongModel,
		proxy: {
			type: "ajax",
			url: rest.api.songs,
			reader: {
				type: "json",
				root: "results"
			}
		}
	});


	function initSongModel() {

		console.log("-- initSongModel. ");
		
	}
	
})();