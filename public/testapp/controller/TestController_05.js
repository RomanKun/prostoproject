(function() {

	// "use strict";

	console.log("-- Start TestController_05.js");

	Ext.define("TestApp.controller.TestController_05", {
		extend: "Ext.app.Controller",
		testProp1: null,
		testProp2: 1,
		views:  [],
		models: [],
		stores: [],
		refs: [{ 
			ref: "myTestView", 
			selector: "#myTestView" 
		}],
		init: initTestController_05,
		onLaunch: fireLaunchTestController_05
	});

	function initTestController_05() {
		console.log("-- initTestController_05. ");
	}

	function fireLaunchTestController_05() {
		console.log("-- fireLaunchTestController_05. ");
	}

})();