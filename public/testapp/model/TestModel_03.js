(function() {
	
	//"use strict";
	
	console.log("-- Start TestModel_03.js ");

	Ext.define("TestApp.model.TestModel_03", {
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
			url: rk.apiProvider("model", "TestModel_03", null).url,
			api: {
				create: (rk.apiProvider("model", "TestModel_03", "create")).url,
				read: (rk.apiProvider("model", "TestModel_03", "read")).url,
				update: (rk.apiProvider("model", "TestModel_03", "update")).url,
				destroy: (rk.apiProvider("model", "TestModel_03", "destroy")).url
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
		idProperty: "idTestModel_03"
	});

})();