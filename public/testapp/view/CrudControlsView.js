(function() {

	// "use strict";

	console.log("-- Start CrudControlsView.js ");

	Ext.define("TestApp.view.CrudControlsView", {
		extend: "Ext.panel.Panel",
		alias: "widget.crudControlsView",
		initComponent: initCrudControlsView
	});


	function initCrudControlsView() {
		
		console.log("-- initCrudControlsView. ");
		
		this.items = {
			title: "CRUD controls",
			layout: {
				type: "hbox",
				align: "left"
			},
			items: [{
				xtype: "button",
				text: "Create",
				margin: 5,
				cls: "btn btn-primary"
			}, 
			{
				xtype: "button",
				text: "Read",
				margin: 5,
				cls: "btn btn-success"
			}, 
			{
				xtype: "button",
				text: "Update",
				margin: 5,
				cls: "btn btn-warning"
			}, 
			{
				xtype: "button",
				text: "Delete",
				margin: 5,
				cls: "btn btn-danger"
			}]
		};
		
		this.callParent(arguments);
	}
	
})();