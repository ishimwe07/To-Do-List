import { createSlice } from "@reduxjs/toolkit";

const initialState =  []
const addToDosReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addToDos: (state, action) => {
            state.push(action.payload)
            return state
        }
    }
})

export const {addToDos} = addToDosReducer.actions
export const reducer = addToDosReducer.reducer