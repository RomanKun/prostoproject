(function() {

	// "use strict";

	console.log("-- Start TestController_03.js");

	Ext.define("TestApp.controller.TestController_03", {
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
		init: initTestController_03,
		onLaunch: fireLaunchTestController_03
	});

	function initTestController_03() {
		console.log("-- initTestController_03. ");
	}

	function fireLaunchTestController_03() {
		console.log("-- fireLaunchTestController_03. ");
	}

})();