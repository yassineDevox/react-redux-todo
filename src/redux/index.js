import { combineReducers, createStore } from "redux";
import { TodoReducer } from "./reducers/todo";

export const store = createStore(
    combineReducers({
        todo: TodoReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


