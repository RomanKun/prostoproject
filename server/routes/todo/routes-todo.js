var express = require("express");
var controller = require("./routes-todo-controller.js")();

module.exports = function(app) {

	var router = express.Router();

	router
	.get("/api/todos", controller.apiGetAllTodos)
	.post("/api/todos", controller.apiPostNewTodo)
	.delete("/api/todos", controller.apiDeleteAllTodos);

	router
	.get("/api/todos/:id", controller.apiGetTodoById)
	.put("/api/todos/:id", controller.apiUpdateTodoById)
	.delete("/api/todos/:id", controller.apiDeleteTodoById);

	app.use("/", router);

}