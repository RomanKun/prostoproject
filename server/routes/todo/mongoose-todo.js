var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    title: String,
    status: Boolean
});

module.exports = mongoose.model("todo", todoSchema);