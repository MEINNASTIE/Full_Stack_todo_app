import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/todo');
        setTasks(response.data.data);
      } catch (error) {
        console.error('Failed to fetch tasks from the server:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleRequestError = (response, errorMessage) => {
    console.error(errorMessage, response.status, response.statusText);
    console.error('Response:', response.data);
  };

  const filterTasks = (searchQuery) => {
    if (!searchQuery) {
      setFilteredTasks([]);
      return;
    }

    const filtered = tasks.filter((task) =>
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  // to add a new task
  const addTask = async (text, priority, description, dueDate) => {
    try {
      const response = await axios.post('http://localhost:5000/api/todo/new', {
        title: text,
        description: description,
        priority: priority,
        dueDate: dueDate,
      });

      if (response.status === 201) {
        const newTask = response.data.data;
        setTasks((prevTasks) => [...prevTasks, newTask]);
        console.log('New task added successfully:', newTask);
      } else {
        handleRequestError(response, 'Failed to add a new task to the server:');
      }
    } catch (error) {
      console.error('Error adding a new task:', error);
    }
  };

  //  to delete a task
  const deleteTask = async (taskId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/todo/delete/${taskId}`);

      if (response.status === 204) {
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
        console.log('Task deleted successfully:', taskId);
      } else {
        handleRequestError(response, 'Failed to delete the task from the server:');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // to update a task
  const updateTask = async (taskId, updatedData) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/todo/update/${taskId}`, updatedData);

      if (response.status === 200) {
        const updatedTask = response.data.data;
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task._id === taskId ? updatedTask : task))
        );
        console.log('Task updated successfully:', updatedTask);
      } else {
        handleRequestError(response, 'Failed to update the task on the server:');
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const contextValue = {
    tasks: filteredTasks.length > 0 ? filteredTasks : tasks,
    addTask,
    deleteTask,
    updateTask,
    filterTasks,
  };

  return <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>;
};

export default TaskProvider;






