(function() {

	//"use strict";

	console.log("-- Start rkjs.js ");

	if (typeof rkjs === "undefined") {
		console.log("-- Connect rkjs lib. ");
		this.rkjs = {
			apiProvider: apiProvider
		};
	} 
	else if (typeof rkjs.apiProvider === "undefined") {
		console.log("-- Attach to rkjs lib new functionality. ");
		rkjs.apiProvider = apiProvider;
	} else {
		console.log("-- You already have what you need. ");
	}

	function apiProvider(appClass, appType, apiOpr) {
		console.log("%c-- apiProvider. ", "color: green");
		console.dir(appClass);
		console.dir(appType);
		console.dir(apiOpr);
		
		var _self = this;

		_self.isAjax = function isAjax() { console.log("%c-- It is ajax. ", "background: gray;"); };
		_self.isApi = function isApi() { console.log("%c-- It is api. ", "background: rgba(150, 50, 170, 0.5);"); };
		
		if (apiOpr === null) {
			_self.isAjax();
		} else {
			_self.isApi();
		}

		if (appType === "BooksStore") {

			console.log("%c-- Load BooksStore from BooksData.json", "background: red;");
			return { url: "/public/testdata/BooksData.json" };

		}

		return {
			url: "/api/test/test"
		};
		
	}

	console.log("-- Script end success. Have a good day. ");

})();