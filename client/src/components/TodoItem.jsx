import { useState } from 'react';

const TodoItem = ({ task, onDelete, onUpdateTask }) => {
  const { _id, title, description, priority, completed, dueDate } = task;

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleDelete = () => {
    onDelete(_id);
  };

  const handleCompletionToggle = () => {
    onUpdateTask(_id, { completed: !completed });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTitle(title);
    setEditedDescription(description);
  };

  const handleUpdateTask = () => {
    onUpdateTask(_id, { title: editedTitle, description: editedDescription });
    setIsEditing(false);
  };

  return (
    <li className="p-2 mb-2 rounded-md shadow-lg text-white p-4">
      <div>
        <span className='font-bold'>{title}</span>
        <p>{description}</p>
        <p>Deadline: {dueDate ? new Date(dueDate).toLocaleDateString() : 'Not set'}</p>
        <p className={`${priority === 'High' ? 'text-red-500' : ''}`}>Priority: {priority}</p>
        <p>Completed: {completed ? 'Yes' : 'No'}</p>
      </div>
      <div className='text-right pr-2 pt-4'>
        {!isEditing && (
          <>
            <button onClick={handleEditClick} className='pr-4'>Edit</button>
            <button onClick={handleDelete} className='pr-4'>Delete</button>
            <button onClick={handleCompletionToggle} className='pr-4'>
              {completed ? 'Done' : 'Not done'}
            </button>
          </>
        )}
        {isEditing && (
          <>
          <div className='flex gap-4'>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className='bg-[#B291A2] placeholder-white shadow-lg focus:outline-none rounded-md'
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className='bg-[#B291A2] placeholder-white shadow-lg focus:outline-none rounded-md'
            />
            <button onClick={handleUpdateTask}>Update</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;



  
  
