(function() {

	//"use strict";

	console.log("-- Start rkApiProvider.js ");

	if (typeof rk === "undefined") {
		console.log("-- Connect rk lib. ");
		this.rk = {
			apiProvider: apiProvider
		};
	} 
	else if (typeof rk.apiProvider === "undefined") {
		console.log("-- Attach to rk lib new functionality. ");
		rk.apiProvider = apiProvider;
	} else {
		console.log("-- You already have what you need. ");
	}

	function apiProvider(callerType, inctance, apiOpr) {
		console.log("%c-- apiProvider. ", "color: green");
		console.dir(callerType);
		console.dir(inctance);
		console.dir(apiOpr);
		
		var _self = this;

		_self.isAjax = function isAjax() { console.log("%c-- It is ajax. ", "background: gray;"); };
		_self.isApi = function isApi() { console.log("%c-- It is api. ", "background: rgba(150, 50, 170, 0.5);"); };
		
		if (apiOpr === null) {
			_self.isAjax();
		} else {
			_self.isApi();
		}

		if (inctance === "BooksStore") {

			console.log("%c-- Load BooksStore from BooksData.json", "background: red;");
			return { url: "/public/testdata/BooksData.json" };

		}

		return {
			url: "/api/test/test"
		};
		
	}

	console.log("-- Script end success. Have a good day. ");

})();