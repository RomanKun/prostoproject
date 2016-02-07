(function() {

	// "use strict";

	console.log("-- Start JumbotronView.js ");

	Ext.define("TestApp.view.JumbotronView", {
		extend: "Ext.panel.Panel",
		alias: "widget.jumbotronView",
		initComponent: initJumbotronView
	});


	function initJumbotronView() {
		console.log("-- initJumbotronView. ");

		this.items = {
			layout: {
				type: "hbox",
				align: "center"
			},
			items: [{
				xtype: "panel",
				tpl: "<h1>{name}</h1>",
				border: 0,
				padding: 0,
				data: {
					name: "PROSTO.FM"
				}
			}]
		};

		this.callParent();
	}
	
})();