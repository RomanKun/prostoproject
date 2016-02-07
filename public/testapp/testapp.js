(function() {

// "use strict";

console.log("-- Start TestApp.js ");

Ext.application({
	name: "TestApp",
	appFolder: "testapp",
	autoCreateViewport: true,
	enableQuickTips : true,
	models: [
	"CardModel",
	"TestModel_01",
	"TestModel_02",
	"TestModel_03",
	"TestModel_04",
	"TestModel_05",
	"TestModel_06"
	],
	stores: [
	"CardsStore",
	"TestStore_01",
	"TestStore_02",
	"TestStore_03",
	"TestStore_04",
	"TestStore_05",
	"TestStore_06"
	],
	controllers: [
	"TestController_00",
	"TestController_01",
	"TestController_02",
	"TestController_03",
	"TestController_04",
	"TestController_05",
	"TestController_06"
	],
	launch: launchTestApp
});

function launchTestApp() {
	console.log("%c-- launchTestApp. ", "background: red;");
	loadAllDependencies();
	Ext.util.History.init();
	Ext.tip.QuickTipManager.init();
	this.callParent();
	document.body.classList.toggle("loaded");
}

function loadAllDependencies() {

	console.log("-- loadAllDependencies. ");

	Ext.require("TestApp.model.CardModel");
	Ext.require("TestApp.model.TestModel_01");
	Ext.require("TestApp.model.TestModel_02");
	Ext.require("TestApp.model.TestModel_03");
	Ext.require("TestApp.model.TestModel_04");
	Ext.require("TestApp.model.TestModel_05");
	Ext.require("TestApp.model.TestModel_06");

	Ext.require("TestApp.store.CardsStore");
	Ext.require("TestApp.store.TestStore_01");
	Ext.require("TestApp.store.TestStore_02");
	Ext.require("TestApp.store.TestStore_03");
	Ext.require("TestApp.store.TestStore_04");
	Ext.require("TestApp.store.TestStore_05");
	Ext.require("TestApp.store.TestStore_06");

	Ext.require("TestApp.controller.TestController_00");
	Ext.require("TestApp.controller.TestController_01");
	Ext.require("TestApp.controller.TestController_02");
	Ext.require("TestApp.controller.TestController_03");
	Ext.require("TestApp.controller.TestController_04");
	Ext.require("TestApp.controller.TestController_05");
	Ext.require("TestApp.controller.TestController_06");

	Ext.require("TestApp.view.CrudView");
	Ext.require("TestApp.view.Jumbotron");
	Ext.require("TestApp.view.TestView_02");
	Ext.require("TestApp.view.TestView_03");
	Ext.require("TestApp.view.TestView_04");
	Ext.require("TestApp.view.TestView_05");
	Ext.require("TestApp.view.TestView_06");
	Ext.require("TestApp.view.Viewport");

}

})();



