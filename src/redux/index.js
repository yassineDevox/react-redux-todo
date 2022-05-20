
import { configureStore,combineReducers } from "@reduxjs/toolkit";
import {TodoReducer} from "./reducers/todo";

export const store  = configureStore({
    reducer:combineReducers( {
        todo:TodoReducer
    })
})