(function () {

    // "use strict";

    console.log("-- Start TestApp.js ");

    Ext.application({
        name: "TestApp",
        appFolder: "testapp",
        autoCreateViewport: true,
        enableQuickTips: true,
        models: [
            "CardModel",
            "BookModel",
            "StudentModel",
            "TestModel_03",
            "TestModel_04",
            "TestModel_05",
            "TestModel_06"
        ],
        stores: [
            "CardsStore",
            "BooksStore",
            "StudentsStore",
            "TestStore_03",
            "TestStore_04",
            "TestStore_05",
            "TestStore_06"
        ],
        controllers: [
            "StudentController",
            "CrudController",
            "TestController_02",
            "TestController_03",
            "TestController_04",
            "TestController_05",
            "TestController_06"
        ],
        launch: launchApp
    });

    function launchApp() {
        console.log("%c-- launchTestApp. ", "background: red;");
        loadAllDependencies();
        Ext.util.History.init();
        Ext.tip.QuickTipManager.init();
        this.callParent();
        document.body.classList.toggle("loaded");
        console.log("%c-- App load success. ", "background: red");
    }

    function loadAllDependencies() {

        console.log("-- loadAllDependencies. ");

        Ext.require("TestApp.model.CardModel");
        Ext.require("TestApp.model.BookModel");
        Ext.require("TestApp.model.StudentModel");
        Ext.require("TestApp.model.TestModel_03");
        Ext.require("TestApp.model.TestModel_04");
        Ext.require("TestApp.model.TestModel_05");
        Ext.require("TestApp.model.TestModel_06");

        Ext.require("TestApp.store.CardsStore");
        Ext.require("TestApp.store.BooksStore");
        Ext.require("TestApp.store.StudentsStore");
        Ext.require("TestApp.store.TestStore_03");
        Ext.require("TestApp.store.TestStore_04");
        Ext.require("TestApp.store.TestStore_05");
        Ext.require("TestApp.store.TestStore_06");

        Ext.require("TestApp.controller.StudentController");
        Ext.require("TestApp.controller.CrudController");
        Ext.require("TestApp.controller.TestController_02");
        Ext.require("TestApp.controller.TestController_03");
        Ext.require("TestApp.controller.TestController_04");
        Ext.require("TestApp.controller.TestController_05");
        Ext.require("TestApp.controller.TestController_06");

        Ext.require("TestApp.view.CrudControlsView");
        Ext.require("TestApp.view.JumbotronView");
        Ext.require("TestApp.view.BookListView");
        Ext.require("TestApp.view.StudentView");
        Ext.require("TestApp.view.TestView_04");
        Ext.require("TestApp.view.TestView_05");
        Ext.require("TestApp.view.TestView_06");
        Ext.require("TestApp.view.Viewport");
		
		console.log("-- All dependencies loaded. ");

    }

})();



