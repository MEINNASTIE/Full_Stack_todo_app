import { useState } from 'react';

const TodoItem = ({ task, onDelete, onPriorityChange, onUpdateTask }) => {
  const { _id, title, description, priority, completed } = task;

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
    <li className={`border p-2 mb-2 ${priority === 'High' ? 'border-red-500' : ''}`}>
      <div>
        <span>{title}</span>
        <p>{description}</p>
        <p>Priority: {priority}</p>
        <p>Completed: {completed ? 'Yes' : 'No'}</p>
      </div>
      <div>
        {!isEditing && (
          <>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleCompletionToggle}>
              {completed ? 'Done' : 'Not done'}
            </button>
          </>
        )}
        {isEditing && (
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <button onClick={handleUpdateTask}>Update</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;



  
  
