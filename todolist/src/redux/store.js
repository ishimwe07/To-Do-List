import { configureStore } from "@reduxjs/toolkit";
import toDoreducer from "./reducer";

const store = configureStore({
    reducer : {
        todos: toDoreducer
    }
})

export default store