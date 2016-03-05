(function() {

	//"use strict";

	console.log("-- Start TestStore_04.js ");

	Ext.define("TestApp.store.TestStore_04", {
		extend: "Ext.data.Store",
		requires: "TestApp.model.TestModel_04",
		model: "TestApp.model.TestModel_04",
		storeId: "idTestStore_04",
		autoLoad: false,
		proxy: {
			type: "ajax",
			url: (rk.apiProvider("Store", "TestStore_04", null)).url,
			reader: {
				type: "json",
				root: "result"
			}
		}
	});

})();