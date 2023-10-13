export default function Hero({ handleChange, value, handleAdd }) {
  return (
    <div className="grid justify-items-center gap-10 mt-[8%]">
      <h1 className="text-slate-200 text-9xl">todos</h1>
      <form
        className="flex justify-between w-1/2 relative"
        onSubmit={(event) => handleAdd(event)}
      >
        <input
          required
          className="border-2 border-slate-400 active:border-slate-500 rounded-3xl pl-5 pr-3 py-3 w-full"
          type="text"
          placeholder="Add todo..."
          value={value}
          onChange={(event) => handleChange(event)}
        />
        <button className="text-2xl font-bold bg-green-500 rounded-full text-white px-2 pb-1 absolute right-4 mt-2">
          +
        </button>
      </form>
    </div>
  );
}
