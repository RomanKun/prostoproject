(function() {

	//"use strict";

	console.log("-- Start StudentsStore.js ");

	Ext.define("TestApp.store.StudentsStore", {
		extend: "Ext.data.Store",
		requires: "TestApp.model.StudentModel",
		model: "TestApp.model.StudentModel",
		storeId: "idStudentsStore",
		autoLoad: false,
		proxy: {
			type: "ajax",
			url: (rk.apiProvider("Store", "StudentsStore", null)).url,
			reader: {
				type: "json",
				root: "result"
			}
		}
	});

})();