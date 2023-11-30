/* eslint-disable react/prop-types */
export default function FormComponent({
  value,
  handleChange,
  handleSubmit,
  className,
  sign,
}) {
  return (
    <form className="flex group" onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        required
        placeholder="Enter Your todo item"
        className={`border-2 ${className}`}
        value={value}
        onChange={handleChange}
      />

      <button
        type="submit"
        className={`text-xl text-blue-900 font-semibold bg-slate-300 px-2 pb-1 -ml-11 border-2 border-slate-400 group-hover:border-slate-950 ${
          sign === "Update" ? "" : "rounded-full"
        }`}
      >
        {sign}
      </button>
    </form>
  );
}
