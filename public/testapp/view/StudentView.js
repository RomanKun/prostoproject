(function() {

	// "use strict";

	console.log("-- Start StudentView.js ");

	Ext.define("TestApp.view.StudentView", {
		extend: "Ext.form.Panel",
		title: "Student view",
		alias: "widget.studentview",
		config: {},
		constructor: constructorView,
		clearForm: clearFormView,

		initComponent: initView
	});


	function initView() {
		console.log("-- initTestView. ");

		var required = "<span style='color: red; data-qtip='Required'>*</span>";

		Ext.apply(this, {
			id: "idStudentView",
			title: "student Information",
			resizable: false,
			collapsible: true,
			bodyPadding: "5",
			buttonAlign: "center",
			border: false,
			trackResetOnLoad: true,
			layout: {
				type: "vbox"
			},
			defaults: {
				xtype: "textfield",
				msgTarget: "side",
				labelAlign: "top",
				labelStyle: "font-weight: bold"
			},
			items: [{
				fieldLabel: "id",
				name: "id",
				readOnly: true,
				width: 35
			},
			{
				fieldLabel: "First Name",
				name: "firstName",
				afterLabelTextTpl: required,
				flex: 1,
				margin: "0 0 0 5",
				allowBlank: false
			},
			{
				fieldLabel: "Middle Name",
				name: "middleName",
				width: 150,
				margin: "0 0 0 5"
			},
			{
				fieldLabel: "Last Name",
				name: "lastName",
				flex: 1,
				margin: "0 0 0 5"

			}]
		});
		
		this.callParent(arguments);
	}

	function constructorView(config) {
		this.initConfig(config);
		return this.callParent(arguments);
	}

	function clearFormView() {
		this.getForm()
		.getFields()
		.each(clearFields);

		function clearFields(field) {
			field.validateOnChange = false;
			field.setValue("");
			field.resetOriginalValue();
		}
	}


	
})();