const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) => {
    const userAgent = req.get('User-Agent');

    if (!userAgent) {
        return res.status(400).json({ error: "User-Agent missing" });
    }

    next();
});

let tasks = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Master REST APIs" }
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = {
        id: req.body.id != null ? req.body.id : tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (task) {
        task.title = req.body.title;
        res.json({ message: "Updated", task });
    } else {
        res.status(404).json({ error: "Task not found" });
    }
});

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message: `Task ${id} removed`,
        remainingTasks: tasks
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});