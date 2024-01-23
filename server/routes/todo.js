import { Router } from 'express';
import Todo from '../models/ToDo.js';

const router = Router();

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get('/todo', asyncHandler(async (req, res) => {
  const allTasks = await Todo.find();
  res.json({ data: allTasks });
}));

router.post('/todo/new', asyncHandler(async (req, res) => {
  console.log('Request Body:', req.body);
  const { title, description, priority } = req.body;

  const newTask = await Todo.create({
    title,
    description: description || '', // If description is not provided, default to an empty string
    priority: priority || 'Medium', // If priority is not provided, default to 'Medium'
  });

  res.status(201).json({ data: newTask });
}));

router.put('/todo/update/:id', asyncHandler(async (req, res) => {
  const updatedTask = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ data: updatedTask });
}));

router.delete('/todo/delete/:id', asyncHandler(async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.status(204).json();
}));

export default router;




