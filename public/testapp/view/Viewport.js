(function() {

	// "use strict";

	console.log("-- Start Viewport.js ");

	Ext.define("TestApp.view.Viewport", {
		extend: "Ext.container.Viewport",
		layout: "fit",
		requires: [
		"TestApp.view.CrudControlsView",
		"TestApp.view.JumbotronView",
		"TestApp.view.BookListView",
		"TestApp.view.TestView_03",
		"TestApp.view.TestView_04",
		"TestApp.view.TestView_05",
		"TestApp.view.TestView_06"
		],
		initComponent: initViewport
	});


	function initViewport() {

		console.log("%c-- initViewport. ", "background: yellow;");
		this.items = {
			layout: {
				type: "vbox",
				align: "stretch"
			},
			items: [{
				xtype: "jumbotronView"
			},
			{
				xtype: "panel",
				title: "Test application",
				html: "Test app is running"
			},
			{
				xtype: "crudControlsView"
			}, 
			{
				xtype: "bookListView"
			}]
		};

		this.callParent();
	}


})();
