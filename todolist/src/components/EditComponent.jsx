import { useState } from "react";
import FormComponent from "./FormComponent";
import { useDispatch } from "react-redux";
import { updateToDo } from "../redux/reducer";

export default function EditComponent({ oldValue, id }) {
  const [value, setValue] = useState(oldValue);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };
  const submitEdit = (event) => {
    event.preventDefault();
    dispatch(updateToDo({ id, value }));
    setValue("");
  };

  return (
    <FormComponent
      value={value}
      handleChange={(event) => handleChange(event)}
      handleSubmit={submitEdit}
      className={"border-slate-400 px-5 w-full py-2 "}
      sign={"Update"}
    />
  );
}
