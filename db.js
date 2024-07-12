//schmas for the database tables>>

const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://admin:Srinjoy%40123@cluster0.orud7zo.mongodb.net/todo_app");

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed : {
        type : Boolean,
        default : false
    }
});

const todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo
}