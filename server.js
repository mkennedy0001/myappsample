const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require("./db/todo");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post("/todo", async (req, res) => {
    const results = await db.createTodo(req.body);
    res.status(201).json({ id: results[0] });
});

app.get("/todo", async (req, res) => {
    const todo = await db.getAllTodo();
    res.status(200).json({ todo });
});

app.patch("/todo/:id", async (req, res) => {
    const id = await db.updateTodo(req.params.id, req.body);
    res.status(200).json({ id });
});

app.delete("/todo/:id", async (req, res) => {
    await db.deleteTodo(req.params.id);
    res.status(200).json({ success: true});
});

app.listen(1337, () => console.log("server is running on port 1337"));