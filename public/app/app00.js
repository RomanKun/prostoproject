(function() {

	"use strict";

	console.log("-- App is loading. ");

	var sessionPanel = Ext.create("Ext.panel.Panel", {
		title: "session panel",
		html: "session panel",
		flex: 2,
		padding: 0
	});

	var detailPanel = Ext.create("Ext.panel.Panel", {
		title: "detail panel",
		html: "detail panel",
		flex: 3,
		padding: 0,
		collapsible: true,
		collapsed: true,
		collapseDirection: "right"
	});

	var speakersPanel = Ext.create("Ext.panel.Panel", {
		region: "centre",
		title: "speakers panel",
		html: "speakers panel",
		flex: 1,
		padding: 0
	});

	var combinedSessionSpeaker = Ext.create("Ext.panel.Panel", {
		
		region: "west",

		layout: {
			type: "vbox",
			align: "stretch" 
		},
		
		items: [
		sessionPanel,
		{
			xtype: "splitter",
			width: 1
		}, 
		speakersPanel
		]

	});

	Ext.application({
		
		name: "MyApp",
		
		launch: function () {
			
			Ext.create("Ext.container.Viewport", {
				layout: {
					type: "border"
				},
				split: true,
				items: [
				combinedSessionSpeaker, 
				detailPanel
				]
			});

		}

	}); 




	// Ext.define("SessionModel", {

	// 	extend: "Ext.data.Model",

	// 	fields: [
	// 		{ name: "id", type: "int" }, 
	// 		{ name: "title", type: "string" }, 
	// 		{ name: "sessionLevel", type: "int" }, 
	// 		{ name: "approved", type: "bool", defaultValue: false }
	// 	],

	// 	validations: [
	// 		{ type: "length", field: "title", min: 5 },
	// 		{ type: "inclusion", field: "sessionLevel", list: [1, 2, 3] }
	// 	],

	// 	proxy: {
	// 		type: "rest",
	// 		url: "/api/todos",
	// 		reader: {
	// 			type: "json"
	// 		}
	// 	}

	// });

	// var sessionBringBack = Ext.ModelManager.getModel("SessionModel");
	
	// sessionBringBack.load(10, {
	// 	// scope: this,

	// 	success: function(record, operation) {
	// 		console.log("-- Success get request to /api/todos. ");
	// 		console.dir(record);
	// 		console.dir(operation);
	// 		record.destroy();
	// 	},

	// 	failure: function(record, operation) {
	// 		console.log("-- Failure get request to /api/todos. ");
	// 		console.dir(record);
	// 		console.dir(operation);
	// 	},

	// 	callback: function(record, operation, success) {
	// 		console.log("-- Callback function do some stuff with data. ");
	// 		console.dir(record);
	// 		console.dir(operation);
	// 		console.dir(success);

	// 		if (success === true) {
	// 			console.log("-- Callback sees that here is Success. ");
	// 		}
	// 		if (success === false) {
	// 			console.log("-- Callback sees that here is Failure. ");
	// 			if (record === null) {
	// 				console.log("-- It is expected record to be null. ");
	// 			} else {
	// 				console.log("-- Unexpected behavior. ")
	// 			}	
	// 		}
	// 	}
	// });


	// var mySession0 = Ext.create("SessionModel", {
	// 	title: "C++",
	// 	sessionLevel: 55,
	// 	approved: true,
	// });

	// mySession0.save({
	// 	success: function(session) {
	// 		console.dir(session);
	// 		mySession0.set("approved", false);
	// 		mySession0.save({
	// 			success: function(session1) {
	// 				console.log(session1.getData());
	// 			}
	// 		});
	// 	}
	// });

	// var mySession1 = Ext.create("SessionModel", {
	// 	title: "C#",
	// 	sessionLevel: 3
	// });

	// console.dir(mySession0.getData());

	// debugger;
	// if (!mySession0.isValid()) {
	// 	var errors = mySession0.validate();
	// 	errors.each(function(item) {
	// 		console.log(item);
	// 	})
	// } else {
	// 	debugger;
	// }

})();