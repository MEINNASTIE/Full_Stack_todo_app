import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TodoForm = () => {
  const { addTask, filterTasks } = useTaskContext();
  const [newTask, setNewTask] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState(Date().now);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask, priority, description, dueDate);
      setNewTask('');
      setDescription('');
      setPriority('Low');
      setDueDate(Date().now);
    }
  };

  const handleSearch = () => {
    filterTasks(searchQuery);
  };

  return (
    <div className='flex flex-col mb-10 gap-4 p-4'>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        className='bg-[#B291A2] placeholder-white shadow-lg focus:outline-none rounded-md p-4 text-white'
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
        className='bg-[#B291A2] placeholder-white shadow-lg focus:outline-none rounded-md p-4 text-white'
      />
      <p className='text-white pl-1'>Set Deadline</p>
       <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className='bg-[#B291A2] text-white shadow-lg focus:outline-none rounded-md p-4'
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className='bg-[#B291A2] text-white shadow-lg focus:outline-none rounded-md p-4'
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAddTask} className='text-white shadow-lg rounded-md p-4'>Add Task</button>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by description"
        className='bg-[#B291A2] placeholder-white shadow-lg focus:outline-none rounded-md p-4 text-white'
      />
      <button onClick={handleSearch} className='text-white shadow-lg rounded-md p-4'>
        Search
      </button>
    </div>
  );
};

export default TodoForm;






