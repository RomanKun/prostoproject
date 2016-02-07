(function() {

	// "use strict";

	console.log("-- Start TestController_06.js");

	Ext.define("TestApp.controller.TestController_06", {
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
		init: initTestController_06,
		onLaunch: fireLaunchTestController_06
	});

	function initTestController_06() {
		console.log("-- initTestController_06. ");
	}

	function fireLaunchTestController_06() {
		console.log("-- fireLaunchTestController_06. ");
	}

})();