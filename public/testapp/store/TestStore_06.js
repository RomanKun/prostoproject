(function() {

	//"use strict";

	console.log("-- Start TestStore_06.js ");

	Ext.define("TestApp.store.TestStore_06", {
		extend: "Ext.data.Store",
		requires: "TestApp.model.TestModel_06",
		model: "TestApp.model.TestModel_06",
		storeId: "idTestStore_06",
		autoLoad: false,
		proxy: {
			type: "ajax",
			url: (rkjs.apiProvider("Store", "TestStore_06", null)).url,
			reader: {
				type: "json",
				root: "result"
			}
		}
	});

})();