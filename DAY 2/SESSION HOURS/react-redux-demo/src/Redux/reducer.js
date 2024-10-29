import { initialState } from "./store";
import { ADD_ITEM, GET_ITEMS, REMOVE_ITEM } from "./types";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS: {
            return state;
        }
        case REMOVE_ITEM: {
            return {
                ...state, todoList: state.todoList.filter(item => item.id !== action.payload)
            }
        }
        case ADD_ITEM: {
            return {
                ...state, todoList: [...state.todoList, action.payload]
            }
        }
        default: {
            return state;
        }
    }
}