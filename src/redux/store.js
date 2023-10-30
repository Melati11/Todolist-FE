import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo-reducer";

const store = configureStore({
    reducer: {
        priority: todoReducer
    }
})

export default store;