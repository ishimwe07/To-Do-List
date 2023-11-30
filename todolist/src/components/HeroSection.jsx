import { useState } from "react";
import TodoItem from "./TodoItem";
import { nanoid } from "nanoid";
import FormComponent from "./FormComponent";
import EditComponent from "./EditComponent";

export default function HeroSection() {
  const [todo, setTodo] = useState({ id: "", value: "", isEditing: false, checked: false });
  const [toDoItems, setTodoItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.value === "") return;
    setTodoItems((prevItems) => [...prevItems, { ...todo, id: nanoid(), isEditing: false }]);
    setTodo({ id: "", value: "", isEditing: false, checked: false });
  };
  
  const handleChange = (event) => {
    const { value } = event.target;
    setTodo((prevValue) => ({ ...prevValue, value }));
  };

  const handleCheck = (id) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  
  const handleEdit = (event, id) => {
    event.preventDefault()
    setTodoItems(prevItems => prevItems.map(item => (item.id === id? {...item, isEditing: !item.isEditing} : item)))
  };
  
  const deleteTodo = (id) => {
    setTodoItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  
  const handleUpdateToDo = (id, newToDo) => {
    setTodoItems(prevItems => prevItems.map(item => (item.id === id? {...item, value: newToDo, isEditing: !item.isEditing} : item)))
    
  }

  const ToDoItemsToDisplay = toDoItems.map((item) => (
    item.isEditing ? (
      <EditComponent key={item.id} id={item.id} oldValue={item.value} handleUpdateToDo={handleUpdateToDo}  />
    ):(
    <TodoItem
      key={item.id}
      value={item.value}
      checked={item.checked}
      handleCheck={() => handleCheck(item.id)}
      deleteTodo={() => deleteTodo(item.id)}
      handleEdit={(event) => handleEdit(event, item.id)}
    />)
  ));

  return (
    <div className="flex flex-col items-center h-full justify-center">
      <div className="w-3/4">
        <h1 className="text-9xl font-mono text-center text-slate-400 pb-10">
          todos
        </h1>
        <FormComponent
          value={todo.value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          className={"border-slate-400 px-5 w-full py-2 rounded-full"}
          sign={"Add"}
        />

        <p className="text-3xl font-semibold items-start py-10 px-10">
          My Todo Items
        </p>
        {ToDoItemsToDisplay}
      </div>
    </div>
  );
}
