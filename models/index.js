var mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.createConnection('mongodb://localhost/todo-api')

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
