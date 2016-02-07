(function() {

	//"use strict";

	console.log("-- Start TestStore_03.js ");

	Ext.define("TestApp.store.TestStore_03", {
		extend: "Ext.data.Store",
		requires: "TestApp.model.TestModel_03",
		model: "TestApp.model.TestModel_03",
		storeId: "idTestStore_03",
		autoLoad: false,
		proxy: {
			type: "ajax",
			url: (rkjs.apiProvider("Store", "TestStore_03", null)).url,
			reader: {
				type: "json",
				root: "result"
			}
		}
	});
	
})();