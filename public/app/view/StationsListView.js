(function() {

	"use strict";
	
	console.log("-- Start StationsListView.js ");
	
	Ext.define("App01.view.StationsListView", {
		extend: "Ext.grid.Panel",
		alias: "widget.stationslist",
		store: "Stations"
	});
	
})();