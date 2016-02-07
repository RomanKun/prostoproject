(function() {
	
	//"use strict";
	
	console.log("-- Start TestModel_06.js ");

	Ext.define("TestApp.model.TestModel_06", {
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
		proxy: {
			type: "ajax",
			url: rkjs.apiProvider("model", "TestModel_06", null).url,
			api: {
				create: (rkjs.apiProvider("model", "TestModel_06", "create")).url,
				read: (rkjs.apiProvider("model", "TestModel_06", "read")).url,
				update: (rkjs.apiProvider("model", "TestModel_06", "update")).url,
				destroy: (rkjs.apiProvider("model", "TestModel_06", "destroy")).url
			},
			reader: {
				type: "json",
				root: "result"
			}
		},
		hasMany: [],
		associations: [{
			type: "hasOne",
			model: ""
		},
		{
			type: "belongsTo",
			model: ""
		}],
		idProperty: "idTestModel_06"
	});

})();