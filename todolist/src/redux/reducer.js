import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("toDos")) || [];
const addToDosReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDos: (state, action) => {
      const newToDo = action.payload;
      state.push(newToDo);
    },
    toggleChecked: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].checked = !state[index].checked;
    },
    deleteToDo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleIsEditing: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].isEditing = !state[index].isEditing;
    },
    updateToDo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].value = action.payload.value;
      state[index].isEditing = false;
    },
  },
});

export const {
  addToDos,
  toggleChecked,
  deleteToDo,
  toggleIsEditing,
  updateToDo,
} = addToDosReducer.actions;
export default addToDosReducer.reducer;
