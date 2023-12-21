import { ADD_TODO_INPUT, DELETE_TODO_INPUT, SET_TODO_INPUT } from './constant'

const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    let newState;
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO_INPUT:

            newState = {
                ...state,
                todos: [...state.todos]
            }

            newState.todos.splice(action.payload, 1)

            return newState
        default:
            throw new Error('Invalid action')
    }
}

export { initState }
export default reducer;