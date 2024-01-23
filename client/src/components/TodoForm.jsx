import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TodoForm = () => {
  const { addTask } = useTaskContext();
  const [newTask, setNewTask] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask({ title: newTask, description, priority });
      setNewTask('');
      setDescription('');
      setPriority('Low');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TodoForm;




