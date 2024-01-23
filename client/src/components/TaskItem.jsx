const TaskItem = ({ task }) => {
  return (
    <li className="bg-gray-100 p-2">
      <span>{task.title}</span>
    </li>
  );
};

export default TaskItem;
