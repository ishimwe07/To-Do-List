import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { nanoid } from "nanoid";
import FormComponent from "./FormComponent";
import EditComponent from "./EditComponent";
import { useDispatch, useSelector } from "react-redux";
import { addToDos } from "../redux/reducer";
export default function HeroSection() {
  const [todo, setTodo] = useState({
    id: "",
    value: "",
    isEditing: false,
    checked: false,
  });

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(todos));
  }, [todos]);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(todo.value.split("").every(character => character === " ")) return;
    dispatch(addToDos({ ...todo, id: nanoid() }));
    setTodo({ id: "", value: "", isEditing: false, checked: false });
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setTodo((prevValue) => ({ ...prevValue, value }));
  };

  const ToDoItemsToDisplay = todos.map(({ id, value, checked, isEditing }) =>
    isEditing ? (
      <EditComponent key={id} id={id} oldValue={value} />
    ) : (
      <TodoItem key={id} id={id} value={value} checked={checked} />
    )
  );

  return (
    <div className="flex flex-col items-center h-full justify-center">
      <div className="w-3/4">
        <h1 className="text-5xl sm:text-9xl font-mono text-center text-slate-400 pb-10">
          todos
        </h1>
        <FormComponent
          value={todo.value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          className={"border-slate-400 px-5 w-full py-2 rounded-full"}
          sign="Add"
        />

        <p className="text-xl sm:text-3xl font-semibold items-start py-10 px-10">
          My Todo Items
        </p>
        {ToDoItemsToDisplay}
      </div>
    </div>
  );
}
