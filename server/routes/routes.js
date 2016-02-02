var express = require("express");

module.exports = function (app) {

	app.get("/", function(req, res, next) {
		res.render("index");
	});

	require("./todo/routes-todo.js")(app);
};