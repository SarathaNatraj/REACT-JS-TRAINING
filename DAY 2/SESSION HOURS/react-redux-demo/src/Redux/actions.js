import { GET_ITEMS, ADD_ITEM, REMOVE_ITEM } from "./types";

export function getItems() {
    return {
        type: GET_ITEMS
    }
}

export function deleteItem(id) {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    }
}