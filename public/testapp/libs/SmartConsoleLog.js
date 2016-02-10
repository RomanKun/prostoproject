(function() {

	"use strict";

	console.log("-- Start SmartConsoleLog.js ");

	if (typeof rk === "undefined") {
		console.log("-- Hello, my name is rk.js and I can help you anywhere. ");
		this.rk = {};
	} 
	else if (typeof rk.log === "undefined") {
		console.log("-- Now I can good logging. ");
	}
	else {
		console.log("-- Use good approach for logging. ");
	}

})();



var rk = {
	debugMode: rkDebugMode,
	log: {
		start: logStart,
		end: logEnd,
		init: logInit,
		config: logConfig,
		func: logFunc
	}
};

var rkDebugMode = 0;

switch(rkDebugMode) {
	case 0: console.log("production"); break;
	case 1: console.log("show all"); break;
	case 2: console.log("show only start"); break;
	case 3: console.log("show only end"); break;
	default: console.log("production");
}


rk.log.start("");
rk.log.end("");
rk.log.init("");
rk.log.config("");
rk.log.func("");

var colors = {
	start: "red",
	end: "navy",
	init: "yellow",
	config: "chartreuse",
	func: "deeppink"
};






