(function() {
	
	"use strict";

	console.log("-- Start RecentlyPlayedScrollerView.js");
	
	Ext.define("App01.view.RecentlyPlayedScrollerView", {
		extend: "Ext.view.View",
		alias: "widget.recentlyplayedscroller",
		itemTpl: "<div></div>",
		store: "ResentSong"
	});

})();