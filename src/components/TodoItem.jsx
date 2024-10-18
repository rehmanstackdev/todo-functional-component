import React from 'react';

function TodoItem({ todoName, todoDate, handleOnClickEdit, handleOnClickDelete }) {
  return (
    <table className="table table-bordered mt-2">
      <tbody>
        <tr>
          <td className="align-middle text-center"> 
            <h6 className="mb-0">{todoName}</h6>
          </td>
          <td className="align-middle text-center"> 
            <h6 className="mb-0">{todoDate}</h6>
          </td>
          <td className="align-middle text-center"> 
            <button type="button" className="btn btn-sm btn-primary me-2" onClick={handleOnClickEdit}>Edit</button>
            <button type="button" className="btn btn-sm btn-danger" onClick={handleOnClickDelete}>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TodoItem;
