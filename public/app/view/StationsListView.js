(function() {

	// "use strict";
	
	console.log("-- Start StationsListView.js ");
	
	Ext.define("App01.view.StationsListView", {
		extend: "Ext.grid.Panel",
		alias: "widget.stationslist",
		store: "StationsStore",
		initComponent: initStationsListView
	});


	function initStationsListView() {

		console.log("-- initStationsListView. ");

	}
	
})();