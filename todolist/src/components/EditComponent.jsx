import { useState } from "react"
import FormComponent from "./FormComponent"

// eslint-disable-next-line react/prop-types
export default function EditComponent({oldValue, id, handleUpdateToDo}) {

  const [value, setValue] = useState(oldValue)

    const handleChange = (event) => {
      const {value} = event.target
      setValue(value)
    }
    const submitEdit = (event) => {
      event.preventDefault()
      handleUpdateToDo(id, value)
      setValue("")
    }

  return (
    <FormComponent
    value={value}
    handleChange={(event) => handleChange(event)}
    handleSubmit={submitEdit}
    className={"border-slate-400 px-5 w-full py-2 "}
    sign={"Update"}
  />
  )
}
