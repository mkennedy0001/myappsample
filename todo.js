const knex = require("./knex");

//the "todo" is the actual name of the table
//the todo in blue is the table object

function createTodo(todo) {
    return knex("todo").insert(todo);
};

function getAllTodo() {
    return knex("todo").select("*");
};

function deleteTodo(id) {
    return knex("todo").where("todo_id", id).del();
};

function updateTodo(id, todo) {
    return knex("todo").where("todo_id", id).update(todo)
};

module.exports = {
    createTodo,
    getAllTodo,
    deleteTodo,
    updateTodo
}