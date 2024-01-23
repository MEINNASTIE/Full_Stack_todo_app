import { useTaskContext } from '../context/TaskContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { tasks, deleteTask, changePriority, updateTask } = useTaskContext();

  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task._id}
          task={task}
          onDelete={deleteTask}
          onPriorityChange={changePriority}
          onUpdateTask={updateTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;


