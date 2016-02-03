var express = require("express");
var controller = require("./routes-todo-controller.js")();

module.exports = function(app) {
	console.log("-- Router todo api config. ");

	var router = express.Router();

	router.get("/api/todos", controller.GetAllTodos);
	router.post("/api/todos", controller.PostNewTodo);
	router.delete("/api/todos", controller.DeleteAllTodos);

	router.get("/api/todos/:id", controller.GetTodoById);
	router.post("/api/todos/:id", controller.PostNewTodo);
	router.put("/api/todos/:id", controller.UpdateTodoById);
	router.delete("/api/todos/:id", controller.DeleteTodoById);

	app.use("/", router);

}; 