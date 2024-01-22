import { Router } from 'express';
const router = Router();
import Todo from '../models/ToDo.js';

// Route to get all to-do items
router.get('/todos', async (req, res) => {
  try {
    const todos = await find();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to add a new to-do item
router.post('/todos', async (req, res) => {
  const { description } = req.body;

  try {
    const newTodo = new Todo({ description });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to update a to-do item
router.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { description, completed } = req.body;

  try {
    const updatedTodo = await findByIdAndUpdate(
      id,
      { description, completed },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to delete a to-do item
router.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await findByIdAndDelete(id);
    res.json({ message: 'To-Do item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;