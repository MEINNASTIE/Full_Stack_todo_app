import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TaskProvider from './context/TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TaskProvider>
  );
};

export default App;









