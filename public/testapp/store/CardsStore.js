(function() {

	//"use strict";

	console.log("-- Start CardsStore.js ");

	Ext.define("TestApp.store.CardsStore", {
		extend: "Ext.data.Store",
		requires: "TestApp.model.CardModel",
		model: "TestApp.model.CardModel",
		storeId: "idCardsStore",
		autoLoad: false,
		data: [{
			en: "test",
			ru: "тест",
			es: "test"
		}],
		proxy: {
			type: "ajax",
			url: (rk.apiProvider("Store", "CardsStore", null)).url,
			reader: {
				type: "json",
				root: "result"
			}
		}
	});

})();