import React from 'react';
import TodoItem from './TodoItem'; // Import the TodoItem component

function TodoItems({ todoItems, handleOnClickEdit, handleOnClickDelete }) {
  return (
    <div className='row justify-content-center'> {/* Add justify-content-center to center items */}
      {todoItems.map((item, index) => (
        <div className="col-md-12 mb-3" key={index}> {/* Use columns to manage responsiveness */}
          <TodoItem 
            todoName={item.name} 
            todoDate={item.duedate} 
            handleOnClickEdit={handleOnClickEdit} 
            handleOnClickDelete={handleOnClickDelete} 
          />
        </div>
      ))}
    </div>
  );
}

export default TodoItems;
