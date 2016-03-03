(function () {

    // "use strict";

    console.log("-- Start CrudController.js");

    Ext.define("TestApp.controller.CrudController", {
        extend: "Ext.app.Controller",
        views: [
            "CrudControlsView"
        ],
        models: [],
        stores: [],
        refs: [
            {
                ref: "buttonCreate",
                selector: "crudControlsView button[text='Create']"
            },
            {
                ref: "buttonRead",
                selector: "crudControlsView button[text='Read']"
            },
            {
                ref: "buttonUpdate",
                selector: "crudControlsView button[text='Update']"
            },
            {
                ref: "buttonDelete",
                selector: "crudControlsView button[text='Delete']"
            }
        ],
        init: initController,
        onLaunch: LaunchController
    });

    function initController() {
        console.log("-- CrudController initController. ");
        var self = this;

        self.test = theTest;
        self.create = theCreate;
        self.read = theRead;
        self.update = theUpdate;
        self.delete = theDelete;
    }

    function LaunchController() {
        console.log("-- CrudController LaunchController. ");
        var self = this;
        self.test();

        var buttonDelete = self.getButtonDelete();
        console.dir(buttonDelete);
        buttonDelete.on("click", function () {
            console.log("-- buttonDelete was cliked");
            self.test();
            self.delete();
        });
        
        var buttonUpdate = self.getButtonUpdate();
        console.dir(buttonUpdate);
        buttonUpdate.on("click", function () {
            console.log("-- buttonUpdate was cliked");
            self.test();
            self.update();
        });
        
        var buttonRead = self.getButtonRead();
        console.dir(buttonRead);
        buttonRead.on("click", function () {
            console.log("-- buttonRead was cliked");
            self.test();
            self.read();
        });
        
        var buttonCreate = self.getButtonCreate();
        console.dir(buttonCreate);
        buttonCreate.on("click", function () {
            console.log("-- buttonCreate was cliked");
            self.test();
            self.create();
        });
    }

    function theTest() {
        console.log("-- CrudController theTest. ");
        var self = this;
        return self;
    }

    function theCreate() {
        console.log("-- CrudController theCreate. ");
        var self = this;
        self.test();
    }

    function theRead() {
        console.log("-- CrudController theRead. ");
        var self = this;
        self.test();
    }

    function theUpdate() {
        console.log("-- CrudController theUpdate. ");
        var self = this;
        self.test();
    }

    function theDelete() {
        console.log("-- CrudController theDelete. ");
        var self = this;
        self.test();
    }

})();