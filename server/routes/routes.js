var express = require("express");

module.exports = function (app) {
	console.log("-- Routes config start. ");

	app.get("/", function(req, res, next) {
		res.render("index");
	});

	require("./todo/api-todo.js")(app);
};