// Default state object
const state = { Items: ["Meeting at 9 AM"] };

// Defining Reducer function
function reducer(initialState = state, action) {
    switch (action.type) {
        case "GET":
            return initialState;
        case "ADD":
            initialState.Items.push(action.payload);
            return initialState;
        case "REMOVE":
            initialState = { Items: initialState.Items.filter(x => x !== action.payload) }
            return initialState;
        default: {
            return initialState;
        }
    }
}

//Create Store
const store = Redux.createStore(reducer, state);

const todolist = document.getElementById('todolist');

// Subscribe the actions
store.subscribe(() => {
    const result = store.getState();
    todolist.innerHTML = "";
    result.Items.map((item) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `${item} <button onClick="RemoveItem('${item}')" class="btn btn-sm btn-danger float-end"><i class="fa-solid fa-xmark"></i></button>`
        todolist.appendChild(li);
    })
})

// Trigger Action
store.dispatch({ type: 'GET' });

document.getElementById('add').addEventListener("click", () => {
    const text = document.getElementById('itemText').value;
    store.dispatch({ type: 'ADD', payload: text });
});

function RemoveItem(item) {
    store.dispatch({ type: 'REMOVE', payload: item });
}