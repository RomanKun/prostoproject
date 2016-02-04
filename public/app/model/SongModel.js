(function() {

	"use strict";

	console.log("-- Start SongModel.js");

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
		proxy: {
			type: "ajax",
			url: "data/recentsongs.json",
			reader: {
				type: "json",
				root: "results"
			}
		}
	});

})();