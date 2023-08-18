import { Router } from "express"
const router = Router();

import { Todo } from '../models/todo';

let todos: Todo[] = [];
type RequestedBody = { text: string };
type RequestedParams = { id: string };

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});

router.post('/todo', (req, res, next) => {
    const body = req.body as RequestedBody;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    }
    todos.push(newTodo);
    res.status(200).json({ todos: todos });
});

router.delete('/delete/:id', (req, res, next) => {
    const params = req.params as RequestedParams;
    for(let todo of todos) {
        if(todo.id === params.id) {
            todos = todos.filter((todoItem) => (todoItem.id !== params.id))
            return res.status(201).json({ message: "deleted", todos: todos });
        }
        else {
            res.status(404).json({ message: 'not found' });
        }
    } 
});

router.put('/update/:id', (req, res, next) => {
    const body = req.body as RequestedBody;
    const params = req.params as RequestedParams;
    const todoIndex = todos.findIndex((todoItem) => (todoItem.id === params.id));
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        res.status(200).json({message: 'todo updated', todos: todos});
    }
    else {
        res.status(404).json({ message: 'not found' });
    }
})

export default router;

