import { Router } from 'express';
import Todo from '../models/ToDo.js';

const router = Router();

// Helper function to handle asynchronous route handlers
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get('/todo', asyncHandler(async (req, res) => {
  const allTasks = await Todo.find();
  res.json({ data: allTasks });
}));

router.post('/todo/new', asyncHandler(async (req, res) => {
  const newTask = await Todo.create(req.body);
  res.status(201).json({ data: newTask });
}));

router.put('/todo/update/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  res.json({ data: updatedTask });
}));

router.delete('/todo/delete/:id', asyncHandler(async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  res.status(204).json();
}));

export default router;

