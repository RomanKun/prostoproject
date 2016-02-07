(function() {

	// "use strict";

	console.log("-- Start TestController_00.js");

	Ext.define("TestApp.controller.TestController_00", {
		extend: "Ext.app.Controller",
		testProp1: null,
		testProp2: 1,
		views:  [],
		models: [],
		stores: [],
		refs: [{ 
			ref: "testView", 
			selector: "#myTestView" 
		}],
		init: initTestController_00,
		onLaunch: fireLaunchTestController_00
	});

	function initTestController_00() {
		console.log("-- initTestController_00. ");
	}

	function fireLaunchTestController_00() {
		console.log("-- fireLaunchTestController_00. ");
	}

})();