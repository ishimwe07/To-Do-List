import { useDispatch } from "react-redux";
import { deleteToDo, toggleChecked, toggleIsEditing } from "../redux/reducer";

export default function TodoItem({ id, value, checked }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between group hover:bg-indigo-100 py-2 rounded-lg px-5">
      <form>
        <span className="space-x-5 text-xl font-sans">
          <input
            type="checkbox"
            name="todo"
            checked={checked}
            onChange={() => dispatch(toggleChecked({ id}))}
            className="text-slate-800"
          />
          <label className={checked ? "line-through" : ""}>{value}</label>
        </span>
      </form>
      <span className="gap-8 items-center hidden group-hover:flex">
        <button
          type=""
          onClick={() => dispatch(toggleIsEditing({ id }))}
        >
          <img
            src="/editIcon.svg"
            alt="Edit Icon"
            className="h-6 cursor-pointer"
          />
        </button>
        <button onClick={() => dispatch(deleteToDo({ id }))}>
          <img
            src="/trash-Icon.svg"
            alt="Traash Icon"
            className="h-6 cursor-pointer"
          />
        </button>
      </span>
    </div>
  );
}
