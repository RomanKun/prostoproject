module.exports = function() {
	
	var TodoController = {
		GetAllTodos: GetAllTodos,
		PostNewTodo: PostNewTodo,
		DeleteAllTodos: DeleteAllTodos,
		GetTodoById: GetTodoById,
		UpdateTodoById: UpdateTodoById,
		DeleteTodoById: DeleteTodoById
	};

	return TodoController;
};

function GetAllTodos(req, res, next) {
	console.log("-- GetAllTodos. ");
	console.dir(req.params);
	console.dir(req.body);
	res.json({
		method: "GetAllTodos",
		params: req.params,
		body: req.body
	});
}

function PostNewTodo(req, res, next) {
	console.log("-- PostNewTodo. ");
	console.dir(req.params);
	console.dir(req.body);
	res.json({
		method: "PostNewTodo",
		params: req.params,
		body: req.body
	});
}

function DeleteAllTodos(req, res, next) {
	console.log("-- DeleteAllTodos. ");
	console.dir(req.params);
	console.dir(req.body);
	res.json({
		method: "DeleteAllTodos",
		params: req.params,
		body: req.body
	});
}

function GetTodoById(req, res, next) {
	console.log("-- GetTodoById. ");
	console.dir(req.params);
	console.dir(req.body);
	res.json({
		method: "GetTodoById",
		params: req.params,
		body: req.body
	});
}

function UpdateTodoById(req, res, next) {
	console.log("-- UpdateTodoById. ");
	console.dir(req.params);
	console.dir(req.body);
	res.json({
		method: "UpdateTodoById",
		params: req.params,
		body: req.body
	});
}

function DeleteTodoById(req, res, next) {
	console.log("-- DeleteTodoById. ");
	console.dir(req.params);
	console.dir(req.body);
	res.json({
		method: "DeleteTodoById",
		params: req.params,
		body: req.body
	});
}
