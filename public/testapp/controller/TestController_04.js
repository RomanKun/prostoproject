(function() {

	// "use strict";

	console.log("-- Start TestController_04.js");

	Ext.define("TestApp.controller.TestController_04", {
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
		init: initTestController_04,
		onLaunch: fireLaunchTestController_04
	});

	function initTestController_04() {
		console.log("-- initTestController_04. ");
	}

	function fireLaunchTestController_04() {
		console.log("-- fireLaunchTestController_04. ");
	}

})();