(function () {

    // "use strict";

    console.log("-- Start StudentView.js ");

    Ext.define("TestApp.view.StudentView", {
        extend: "Ext.form.Panel",
        title: "Student view",
        alias: "widget.studentview",
        config: {},
        constructor: constructorView,
        clearForm: clearFormView,
        initComponent: initComponentView
    });


    function initComponentView() {
        console.log("-- initComponentView. ");
        var self = this;

        var required = "<span style='color: red; data-qtip='Required'>*</span>";

        Ext.apply(self, {
            id: "idStudentView",
            title: "Student Information",
            resizable: false,
            collapsible: true,
            bodyPadding: "5",
            buttonAlign: "center",
            border: false,
            trackResetOnLoad: true,
            layout: {
                type: "vbox"
            },
            defaults: {
                xtype: "textfield",
                msgTarget: "side",
                labelAlign: "top",
                labelStyle: "font-weight: bold"
            },
            items: [{
                xtype: "fieldcontainer",
                layout: "hbox",
                defaultType: "textfield",
                width: "100%",
                fieldDefaults: {
                    labelAlign: "top",
                    labelStyle: "font-weight: bold"
                },
                items: [{
                    fieldLabel: "id",
                    name: "id",
                    readOnly: true,
                    width: 35
                },
                    {
                        fieldLabel: "First Name",
                        name: "firstName",
                        afterLabelTextTpl: required,
                        flex: 1,
                        margin: "0 0 0 5",
                        allowBlank: false
                    },
                    {
                        fieldLabel: "Middle Name",
                        name: "middleName",
                        width: 150,
                        margin: "0 0 0 5"
                    },
                    {
                        fieldLabel: "Last Name",
                        name: "lastName",
                        flex: 1,
                        margin: "0 0 0 5"

                    }]
            },
                {
                    xtype: "datefield",
                    fieldLabel: "Date of Birth",
                    name: "birthDate"
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Address",
                    width: "100%",
                    name: "adsress1"
                },
                {
                    xtype: "textfield",
                    hideLabel: true,
                    name: "address2",
                    width: "100%",
                    fieldLabel: "address2"
                },
                {
                    xtype: "textfield",
                    fieldLabel: "City",
                    width: "100%",
                    name: "city"
                },
                {
                    xtype: "textfield",
                    fieldLabel: "State",
                    width: "100%",
                    name: "state"
                }],
            buttons: [{
                text: "Create",
                itemId: "btnCreate"
            },
                {
                    text: "Read Data",
                    itemId: "btnLoad"
                },
                {
                    text: "Update",
                    itemId: "btnUpdate"
                },
                {
                    text: "Delete",
                    itemId: "btnDelete"
                },
                {
                    text: "Reset",
                    itemId: "btnReset"
                },
                {
                    text: "Clear",
                    itemId: "btnClear"
                }]
        });

        self.callParent(arguments);
    }

    function constructorView(config) {
        console.log("-- constructorView. ");
        var self = this;
        self.initConfig(config);
        return self.callParent(arguments);
    }

    function clearFormView() {
        console.log("-- clearFormView. ");
        var self = this;
        self.getForm()
            .getFields()
            .each(clearFields);

        function clearFields(field) {
            console.log("-- clearFields. ");
            field.validateOnChange = false;
            field.setValue("");
            field.resetOriginalValue();
        }
    }

})();