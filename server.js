var express = require("express");

var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

var app = express();

var config = require("./server/config/config-config")[env];

require("./server/config/config-express")(app, config);

console.log("-- Config routes. ");
require("./server/routes/routes.js")(app);

require("./server/config/config-express-error-handling.js")(app);

app.listen(config.port);
console.log("-- Magic happens on port " + config.port + ". ");

module.exports = app;