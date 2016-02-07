(function() {
	
	//"use strict";
	
	console.log("-- Start CardModel.js ");

	Ext.define("TestApp.model.CardModel", {
		extend: "Ext.data.Model",
		fields: [{
			name: "ru",
			type: "string"
		}, 
		{
			name: "en",
			type: "string"
		}, 
		{
			name: "es",
			type: "string"
		}],
		idProperty: "idCardModel"
	});

})();