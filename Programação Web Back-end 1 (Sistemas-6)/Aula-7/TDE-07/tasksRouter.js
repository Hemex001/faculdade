const express = require('express');
const router = express.Router();

let tasks = [
  {
    id: 1, 
    name: "Comprar leite", 
    description: "Ir no mercado da esquina e comprar leite", 
    isDone: false }
];

router.get('/', (req, res) => {
  res.status(200).json(tasks);
});

router.post('/', (req, res) => {
  const { name, description, isDone } = req.body;
  const newTask = { id: tasks.length + 1, name, description, isDone };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, isDone } = req.body;
  let task = tasks.find(task => task.id === parseInt(id));
  if (task) {
    task.name = name;
    task.description = description;
    task.isDone = isDone;
    res.status(200).json(task);
  } else {
    res.status(404).send('Tarefa nao encontrada');
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== parseInt(id));
  res.status(204).send();
});

module.exports = router;