(function() {
	
	//"use strict";
	
	console.log("-- Start TestModel_04.js ");

	Ext.define("TestApp.model.TestModel_04", {
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
			url: rkjs.apiProvider("model", "TestModel_04", null).url,
			api: {
				create: (rkjs.apiProvider("model", "TestModel_04", "create")).url,
				read: (rkjs.apiProvider("model", "TestModel_04", "read")).url,
				update: (rkjs.apiProvider("model", "TestModel_04", "update")).url,
				destroy: (rkjs.apiProvider("model", "TestModel_04", "destroy")).url
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
		idProperty: "idTestModel_04"
	});
})();