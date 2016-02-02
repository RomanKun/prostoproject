module.exports = function() {
	
	var TodoController = {
		apiGetAllTodos: apiGetAllTodos,
		apiPostNewTodo: apiPostNewTodo,
		apiDeleteAllTodos: apiDeleteAllTodos,
		apiGetTodoById: apiGetTodoById,
		apiUpdateTodoById: apiUpdateTodoById,
		apiDeleteTodoById: apiDeleteTodoById
	};

	return TodoController;
};

function apiGetAllTodos(req, res, next) {
	console.log("-- apiGetAllTodos. ");
	console.dir(req.params);
	console.dir(req.body);
	res.json({
		method: "apiGetAllTodos",
		params: req.params,
		body: req.body
	});
}

function apiPostNewTodo(req, res, next) {
	console.log("-- apiPostNewTodo. ");
	console.dir(req.params);
	console.dir(req.body);
	res.json({
		method: "apiPostNewTodo",
		params: req.params,
		body: req.body
	});
}

function apiDeleteAllTodos(req, res, next) {
	console.log("-- apiDeleteAllTodos. ");
	console.dir(req.params);
	console.dir(req.body);
	res.json({
method: "apiDeleteAllTodos",
		params: req.params,
		body: req.body
	});
}

function apiGetTodoById(req, res, next) {
	console.log("-- apiGetTodoById. ");
	console.dir(req.params);
	console.dir(req.body);
	res.json({
		method: "apiGetTodoById",
		params: req.params,
		body: req.body
	});
}

function apiUpdateTodoById(req, res, next) {
	console.log("-- apiUpdateTodoById. ");
	console.dir(req.params);
	console.dir(req.body);
	res.json({
		method: "apiUpdateTodoById",
		params: req.params,
		body: req.body
	});
}

function apiDeleteTodoById(req, res, next) {
	console.log("-- apiDeleteTodoById. ");
	console.dir(req.params);
	console.dir(req.body);
	res.json({
		method: "apiDeleteTodoById",
		params: req.params,
		body: req.body
	});
}
