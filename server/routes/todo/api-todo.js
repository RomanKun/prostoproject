var express = require("express");
var TodoController = require("./controller-todo.js")();
// var todoUpload = require("./upload-todo.js")();

module.exports = function(app) {
	console.log("-- API todo config. ");

	var router = express.Router();
	// router.use(todoUpload);
	
	
    router.route("/api/todo")
        .post(TodoController.createNewTodo);
	router.route("/api/todo/:_id")
        .get(TodoController.readTodoById)
        .put(TodoController.updateTodoById)
        .delete(TodoController.deleteTodoById);
    router.route("/api/todos")
        .get(TodoController.getAllTodos)
		.delete(TodoController.deleteAllTodos);

    app.use("/", router);

}; 