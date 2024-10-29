const initialState = ['India']

function reducer(state, action) {
    switch (action.type) {
        case 'ADD': {
            return [...state, action.value]
        }
        case 'REMOVE': {
            state = state.filter(x => x !== action.value)
            return state;
        }
        default: {
            return state;
        }
    }
}

export { initialState };
export default reducer;