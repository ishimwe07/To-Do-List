import { useState,useEffect } from "react"
import TodoComponent from "./toDoComponent"
import Hero from "./hero"

import { nanoid } from "nanoid";


export default function App(){

  const [toDoItem, setNewItem] = useState({value:""});
  const [allToDoItems, setAllItems] = useState(
          ()=> JSON.parse(localStorage.getItem("todos")) || []
        );
        

  useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(allToDoItems));
  },[allToDoItems])

  const handleChange = (event)=> {
    setNewItem({
      id:nanoid(),
      value: event.target.value,
      checked:false
    });
  }
  

  const handleAdd =(event)=>{
    event.preventDefault();
    setAllItems((prevItems)=> [...prevItems, toDoItem]);
    setNewItem({value:""});
  }

  const handleCheck = (id) => {
    setAllItems(prevItems=> prevItems.map ( item => item.id === id ? {...item ,checked : !item.checked}:item ))
  }

  const handleDelete = (toDoId) => {
    setAllItems(prevItem => prevItem.filter(item=> item.id !== toDoId))
  }

const allComponents = allToDoItems.map(el=> <TodoComponent 
                                                  key={el.id} 
                                                  id={el.id} 
                                                  value={el.value} 
                                                  handleCheck={() => handleCheck(el.id)} 
                                                  checked={el.checked} 
                                                  handleDelete={()=> handleDelete(el.id)}
                                                  />)

  return(
    <>
      <Hero handleChange={handleChange} value={toDoItem.value} handleAdd={handleAdd} />
      <div className="ml-[25%] mt-[5%]">
        <h1 className="mb-5 -ml-5 font-bold text-xl">My To Do List</h1>
        <div>
          {allComponents}
        </div>
      </div>
    </>
  )
}