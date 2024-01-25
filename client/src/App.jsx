import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TaskProvider from './context/TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <div className="container mx-auto p-8 shadow-lg rounded-md m-[100px] max-w-[600px]">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">To-Do App v.0.2</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TaskProvider>
  );
};

export default App;









