(function() {

	//"use strict";

	console.log("-- Start TestStore_02.js ");

	Ext.define("TestApp.store.TestStore_02", {
		extend: "Ext.data.Store",
		requires: "TestApp.model.StudentModel",
		model: "TestApp.model.StudentModel",
		storeId: "idTestStore_02",
		autoLoad: false,
		proxy: {
			type: "ajax",
			url: (rkjs.apiProvider("Store", "TestStore_02", null)).url,
			reader: {
				type: "json",
				root: "result"
			}
		}
	});

})();