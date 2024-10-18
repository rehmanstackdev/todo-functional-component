import React from 'react'

function Todo({handleOnClick}) {
  return (
    <>
     <div className="row justify-content-center align-items-center">
          <div className="col-4">
          <input type="text" name="todo" placeholder="Add Todo" />
          </div>
          <div className="col-3 ms-2">
          <input type="date" />
          </div>
          <div className="col-1">
          <button className="btn btn-success" onClick={handleOnClick}>Add</button>
          </div>
        </div>
    </>
  )
}

export default Todo