(function() {

	// "use strict";

	console.log("-- Start Jumbotron.js ");

	Ext.define("TestApp.view.Jumbotron", {
		extend: "Ext.panel.Panel",
		alias: "widget.jumbotron",
		initComponent: initJumbotron
	});


	function initJumbotron() {
		console.log("-- initJumbotron. ");

		this.items = {
			layout: {
				type: "hbox",
				height: 100
			},
			items: [{
				xtype: "panel",
				tpl: "<h1>{name}</h1>",
				border: 0,
				data: {
					name: "prosto.fm"
				}
			}]
		};

		this.callParent();
	}
	
})();