"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json({ todos: todos });
});
router.delete('/delete/:id', (req, res, next) => {
    for (let todo of todos) {
        if (todo.id === req.params.id) {
            todos = todos.filter((todoItem) => (todoItem.id !== req.params.id));
            return res.status(201).json({ message: "deleted", todos: todos });
        }
        else {
            res.status(404).json({ message: 'not found' });
        }
    }
});
router.put('/update/:id', (req, res, next) => {
    const todoIndex = todos.findIndex((todoItem) => (todoItem.id === req.params.id));
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        res.status(200).json({ message: 'todo updated', todos: todos });
    }
    else {
        res.status(404).json({ message: 'not found' });
    }
});
exports.default = router;
