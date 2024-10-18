import React from 'react';
import AppName from "./components/AppName";
import Todo from "./components/Todo";
import TodoItems from "./components/TodoItems";
import Container from './components/Container';

function App() {
  const handleAdd = () => {
    console.log("Button add clicked");
  };

  const handleEdit = () => {
    console.log("Button edit clicked");
  };

  const handleDelete = () => {
    console.log("Button delete clicked");
  };

  const todoitemslist = [
    {
      name: "Fruit",
      duedate: "12/2/2024"
    },
    {
      name: "Cake",
      duedate: "1/5/2024"
    },
    {
      name: "Milk",
      duedate: "20/8/2024"
    }
  ];

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Container>
          <AppName />
          <Todo handleOnClick={handleAdd} />
          <TodoItems 
            todoItems={todoitemslist} 
            handleOnClickEdit={handleEdit} 
            handleOnClickDelete={handleDelete} 
          />
        </Container>
      </div>
    </>
  );
}

export default App;
