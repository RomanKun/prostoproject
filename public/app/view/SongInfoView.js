(function() {

	// "use strict";
	
	console.log("-- Start SongInfoView.js ");
	
	Ext.define("App01.view.SongInfoView", {
		extend: "Ext.panel.Panel",
		tpl: "<h1>About</h1> <p></p>",
		initComponent: initSongInfoView
	});


	function initSongInfoView() {

		console.log("-- initSongInfoView. ");
		
	}
	
})();