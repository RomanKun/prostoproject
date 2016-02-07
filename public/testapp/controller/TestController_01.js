(function() {

	// "use strict";

	console.log("-- Start TestController_01.js");

	Ext.define("TestApp.controller.TestController_01", {
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
		init: initTestController_01,
		onLaunch: fireLaunchTestController_01
	});

	function initTestController_01() {
		console.log("-- initTestController_01. ");
	}

	function fireLaunchTestController_01() {
		console.log("-- fireLaunchTestController_01. ");
	}

})();