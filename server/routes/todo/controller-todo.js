var Todo = require("./mongoose-todo.js");
// var upload = require("./upload-todo.js");

module.exports = function () {

    var TodoController = {
        getAllTodos: getAllTodos,
        deleteAllTodos: deleteAllTodos,
        createNewTodo: createNewTodo,
        readTodoById: readTodoById,
        updateTodoById: updateTodoById,
        deleteTodoById: deleteTodoById
    };

    return TodoController;
};

function getAllTodos(req, res, next) {
    console.log("-- getAllTodos. ");
    console.dir(req.params);
    console.dir(req.body);
    res.json({
        success: true,
        errorCode: null,
        errorMessage: null,
        total: 1,
        result: {
            method: "getAllTodos",
            params: req.params,
            body: req.body
        }
    });
}

function createNewTodo(req, res, next) {
    console.log("-- сreateNewTodo. ");
    console.dir(req.params);
    console.dir(req.body);
    res.json({
        success: true,
        errorCode: null,
        errorMessage: null,
        total: 1,
        result: {
            method: "сreateNewTodo",
            params: req.params,
            body: req.body
        }
    });
}

function deleteAllTodos(req, res, next) {
    console.log("-- deleteAllTodos. ");
    console.dir(req.params);
    console.dir(req.body);
    res.json({
        success: true,
        errorCode: null,
        errorMessage: null,
        total: 1,
        result: {
            method: "deleteAllTodos",
            params: req.params,
            body: req.body
        }
    });
}

function readTodoById(req, res, next) {
    console.log("-- readTodoById. ");
    console.dir(req.params);
    console.dir(req.body);
    res.json({
        success: true,
        errorCode: null,
        errorMessage: null,
        total: 1,
        result: {
            method: "readTodoById",
            params: req.params,
            body: req.body
        }
    });
}

function updateTodoById(req, res, next) {
    console.log("-- updateTodoById. ");
    console.dir(req.params);
    console.dir(req.body);
    res.json({
        success: true,
        errorCode: null,
        errorMessage: null,
        total: 1,
        result: {
            method: "updateTodoById",
            params: req.params,
            body: req.body
        }
    });
}

function deleteTodoById(req, res, next) {
    console.log("-- deleteTodoById. ");
    console.dir(req.params);
    console.dir(req.body);
    res.json({
        success: true,
        errorCode: null,
        errorMessage: null,
        total: 1,
        result: {
            method: "deleteTodoById",
            params: req.params,
            body: req.body
        }
    });
}
