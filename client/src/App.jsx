import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  // Local state to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task to the list
  const handleAddTask = (newTask) => {
    // Update the state to include the new task
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center mt-4">To-Do List</h1>
      {/* Pass the handleAddTask function to the AddTaskForm component */}
      <AddTaskForm onAddTask={handleAddTask} />
      {/* Pass the tasks state to the TaskList component */}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;



