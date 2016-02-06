(function() {

	// "use strict";

	console.log("-- Start NewStationView.js ");

	Ext.define("App01.view.NewStationView", {
		extend: "Ext.form.field.ComboBox",
		alias: "widget.newstation",
		store: "SearchResultsStore",
		initComponent: initNewStationView
	});


	function initNewStationView() {

		console.log("-- initNewStationView. ");
		
	}

})();