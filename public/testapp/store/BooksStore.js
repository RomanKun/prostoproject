(function() {

	//"use strict";

	console.log("-- Start BooksStore.js ");

	Ext.define("TestApp.store.BooksStore", {
		extend: "Ext.data.Store",
		requires: "TestApp.model.BookModel",
		model: "TestApp.model.BookModel",
		storeId: "idBooksStore",
		autoLoad: true,
		proxy: {
			type: "ajax",
			url: (rkjs.apiProvider("Store", "BooksStore", null)).url,
			reader: {
				type: "json",
				root: "result",
				successProperty: "success"
			}
		}
	});

})();