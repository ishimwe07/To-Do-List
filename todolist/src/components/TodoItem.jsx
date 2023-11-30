/* eslint-disable react/prop-types */
export default function TodoItem({
  value,
  checked,
  handleCheck,
  deleteTodo,
  handleEdit,
}) {
  return (
    <form className="flex items-center justify-between group hover:bg-indigo-100 py-2 rounded-lg px-5">
      <span className="space-x-5 text-xl font-sans ">
        <input
          type="checkbox"
          name="todo"
          value={checked}
          onChange={handleCheck}
          className="text-slate-800"
        />
        <label className={checked ? "line-through" : ""}>{value}</label>
      </span>

      <span className="gap-8 items-center hidden group-hover:flex">
        <button type="" onClick={handleEdit}>
          <img
            src="/editIcon.svg"
            alt="Edit Icon"
            className="h-6 cursor-pointer"
          />
        </button>
        <button onClick={deleteTodo}>
          <img
            src="/trash-Icon.svg"
            alt="Traash Icon"
            className="h-6 cursor-pointer"
          />
        </button>
      </span>
    </form>
  );
}
