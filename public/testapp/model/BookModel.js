(function() {
	
	//"use strict";
	
	console.log("-- Start BookModel.js ");

	Ext.define("TestApp.model.BookModel", {
		extend: "Ext.data.Model",
		fields: [{
			name: "id",
			type: "int"
		}, 
		{
			name: "name",
			type: "string"
		}, 
		{
			name: "author",
			type: "string"
		}, {
			name: "year",
			type: "date"
		}],
		idProperty: "idBookModel"
	});

})();