var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

module.exports = function (app, config) {

	app.set("views", path.join(config.rootPath, "public"));
	app.set("view engine", "jade");
	app.use(favicon(path.join(config.rootPath, "public", "favicon.ico")));
	app.use(logger("dev"));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());

	app.use("/public", express.static(path.join(config.rootPath, "public")));
	app.use("/app", express.static(path.join(config.rootPath, "public", "app")));

};