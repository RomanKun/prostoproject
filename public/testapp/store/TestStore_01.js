(function() {

	//"use strict";

	console.log("-- Start TestStore_01.js ");

	Ext.define("TestApp.store.TestStore_01", {
		extend: "Ext.data.Store",
		requires: "TestApp.model.TestModel_01",
		model: "TestApp.model.TestModel_01",
		storeId: "idTestStore_01",
		autoLoad: false,
		proxy: {
			type: "ajax",
			url: (rkjs.apiProvider("Store", "TestStore_01", null)).url,
			reader: {
				type: "json",
				root: "result"
			}
		}
	});

})();