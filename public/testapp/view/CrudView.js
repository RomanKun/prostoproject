(function() {

	// "use strict";

	console.log("-- Start CrudView.js ");

	Ext.define("TestApp.view.CrudView", {
		extend: "Ext.panel.Panel",
		alias: "widget.crudview",
		initComponent: initCrudView
	});


	function initCrudView() {
		
		console.log("-- initCrudView. ");
		
		this.items = {
			title: "CRUD view",
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
		
		this.callParent();
	}
	
})();