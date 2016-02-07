(function() {

	//"use strict";

	console.log("-- Start TestStore_05.js ");

	Ext.define("TestApp.store.TestStore_05", {
		extend: "Ext.data.Store",
		requires: "TestApp.model.TestModel_05",
		model: "TestApp.model.TestModel_05",
		storeId: "idTestStore_05",
		autoLoad: false,
		proxy: {
			type: "ajax",
			url: (rkjs.apiProvider("Store", "TestStore_05", null)).url,
			reader: {
				type: "json",
				root: "result"
			}
		}
	});

})();