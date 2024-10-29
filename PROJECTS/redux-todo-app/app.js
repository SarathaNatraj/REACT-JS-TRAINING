const redux = require('redux');
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware
const combineReducers = redux.combineReducers
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

// Create state object
const state = { todos: [] }

// Action Types
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const MARK_TODO = 'MARK_TODO';
const GET_TODOS = 'GET_TODOS';
const GET_TODO = 'GET_TODO';

// Action Creator Functions

function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

function markTodo(id) {
    return {
        type: MARK_TODO,
        payload: id
    }
}

function getTodos(todos) {
    return {
        type: GET_TODOS,
        payload: todos
    }
}

function getTodo(id) {
    return {
        type: GET_TODO,
        payload: id
    }
}

function fetchTodos() {
    return function (dispatch) {
        axios.get('https://dummyjson.com/todos?limit=5')
            .then(res => dispatch(getTodos(res.data.todos)))
    }
}

// Reducer Function
function reducer(initialState = state, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...initialState, todos: [...initialState.todos, action.payload]
            }
        }
        case REMOVE_TODO: {
            return {
                ...initialState, todos: [...initialState.todos.filter(x => x.id != action.payload)]
            }
        }
        case MARK_TODO: {
            initialState.todos.find(x => x.id == action.payload).isCompleted = !initialState.todos.find(x => x.id == action.payload).isCompleted
            return {
                ...initialState
            }
        }
    }
}

function reducer2(initialState = state, action) {
    switch (action.type) {
        case GET_TODO: {
            return {
                ...initialState, todos: action.payload
            }
        }
        case GET_TODOS: {
            return {
                ...initialState, todos: [action.payload]
            }
        }
    }
}

// const rootReducer = combineReducers({
//     todos: reducer,
//     todos2: reducer2
// })

// Create Store
const store = redux.legacy_createStore(reducer, applyMiddleware(logger, thunkMiddleware));

// Create store with combine reeducers
// const store = redux.legacy_createStore(rootReducer, applyMiddleware(logger));


// Subscribing for actions
// store.subscribe(() => console.log(store.getState()))

// Dispatching an action
// store.dispatch(addTodo({ id: 1, text: 'Meeting at 9 AM', isCompleted: false }))
// store.dispatch(addTodo({ id: 2, text: 'Buy Groceries', isCompleted: false }))

// store.dispatch(markTodo(2))

store.dispatch(fetchTodos());