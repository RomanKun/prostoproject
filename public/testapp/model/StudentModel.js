(function() {
	
	//"use strict";
	
	console.log("-- Start StudentModel.js ");

	Ext.define("TestApp.model.StudentModel", {
		extend: "Ext.data.Model",
		idProperty: "idStudentModel",
		fields: [{
			name: "id",
			type: "int"
		}, 
		{
			name: "firstName",
			type: "string"
		}, 
		{
			name: "middleName",
			type: "string"
		},
		{
			name: "lastName",
			type: "string"
		},
		{
			name: "birthDate",
			type: "date"
		},
		{
			name: "address1",
			type: "string"
		},
		{
			name: "address2",
			type: "string"
		},
		{
			name: "city",
			type: "string"
		},
		{
			name: "state",
			type: "string"
		}],
		validations: [{
			type: "presence",
			field: "firstName"
		}],
		proxy: {
			type: "ajax",
			idParam: "idProxyStudentModel",
			api: {
				create: "/api/create/student",
				read: "/api/read/student",
				update: "/api/update/student",
				destroy: "/api/destroy/student"
			},
			reader: {
				type: "json",
				root: "result"
			}
		}
	});

})();