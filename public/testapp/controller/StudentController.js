(function() {

	// "use strict";

	console.log("-- Start StudentController.js");

	Ext.define("TestApp.controller.StudentController", {
		extend: "Ext.app.Controller",
        models: ["TestApp.model.StudentModel"],
        views: ["TestApp.view.StudentView"],
		refs: [{ 
			ref: "studentForm", 
			selector: "viewport > container > studentview" 
		}],
		init: initController,
		onLaunch: fireLaunchController,
        onResetClick: fireResetClick,
        onClearClick: fireClearClick,
        onCreateClick: fireCreateClick,
        onLoadClick: fireLoadClick,
        onUpdateClick: fireUpdateClick,
        onDeleteClick: fireDeleteClick
	});

	function initController() {
		console.log("-- initController. ");
        this.control({
            "viewport > container > studentview button[itemId=btnCreate]": {
                click: this.onCreateClick
            },
            "viewport > container > studentview button[itemId=btnLoad]": {
                click: this.onLoadClick
            },
            "viewport > container > studentview button[itemId=btnUpdate]": {
                click: this.onUpdateClick
            },
            "viewport > container > studentview button[itemId=btnDelete]": {
                click: this.onDeleteClick
            },
            "viewport > container > studentview button[itemId=btnReset]": {
                click: this.onResetClick
            },
            "viewport > container > studentview button[itemId=btnClear]": {
                click: this.onClearClick
            }
        });
	}

	function fireLaunchController() {
		console.log("-- fireLaunchController. ");
	}
    
    function fireResetClick() {
        console.log("-- fireResetClick. ");
        this.getStudentForm().getForm().reset();
    }
    
    function fireClearClick() {
        console.log("-- fireClearClick. ");
        this.getStudentForm().clearForm();
    }
    
    function fireCreateClick() {
        console.log("-- fireCreateClick");
    }
    
    function fireLoadClick() {
        console.log("-- fireLoadClick");
        var existingStudent = Ext.create("TestApp.model.StudentModel");
        existingStudent.load(1, {
            scope: this,
            failure: failureLoad,
            success: successLoad
        });
        
        function failureLoad(record, operation) {
            console.log("-- failureLoad. ");
            console.dir(record);
            console.dir(operation);
        }
        
        function successLoad (record, operation) {
            console.log("-- ccessLoad. ");
            console.dir(record);
            console.dir(operation);
            try {
                this.getSudentForm().loadRecord(record);
            }
            catch(ex) {
                console.dir(ex);
            }
        }
    }
    
    function fireUpdateClick() {
        console.log("-- fireUpdateClick");
    }
    
    function fireDeleteClick() {
        console.log("-- fireDeleteClick");
    }
    
    

})();