import { createStore } from "redux";
import reducer from "./reducer";
export const initialState = {
    todoList: [
        
    ]
}

const store = createStore(reducer, initialState);
export default store;