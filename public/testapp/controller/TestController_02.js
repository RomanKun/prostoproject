(function() {

	// "use strict";

	console.log("-- Start TestController_02.js");

	Ext.define("TestApp.controller.TestController_02", {
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
		init: initTestController_02,
		onLaunch: fireLaunchTestController_02
	});

	function initTestController_02() {
		console.log("-- initTestController_02. ");
	}

	function fireLaunchTestController_02() {
		console.log("-- fireLaunchTestController_02. ");
	}

})();