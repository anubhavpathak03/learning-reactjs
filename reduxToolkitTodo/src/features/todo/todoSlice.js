// step - 1: import these file
import {createSlice, nanoid} from '@reduxjs/toolkit';

// step-2: making your initial state (just simple ek object bnaya hai uske ander array daal diya project ke according)
const loadTodosFromStorage = () => {
    try {
        const storedTodos = localStorage.getItem('todos')
        return storedTodos ? JSON.parse(storedTodos) : []
    } catch (error) {
        console.error('Error loading todos from localStorage:', error)
        return []
    }
}

const saveTodosToStorage = (todos) => {
    try {
        localStorage.setItem('todos', JSON.stringify(todos))
    } catch (error) {
        console.error('Error saving todos to localStorage:', error)
    }
}

const initialState = {
    todos: loadTodosFromStorage(),
    editingTodo: null
}

// step-3:  slice bnana
export const todoSlice = createSlice({
    // har slice ka naam, initialState or reduers hota hai
    name: 'todo',  
    initialState,
    reducers: {
        // idhar hote hain humre properties or function

        // context api mein hum declaration daalte the only 
        // par yahan hum puri defination dete hn function ki
        // or humesa do parameter milte hi hn state or action
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload, // payload ek object hai
                completed: false,
            }
            // ab is todo ko state mein push kar dengye
            state.todos.push(todo);
            saveTodosToStorage(state.todos);
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
            saveTodosToStorage(state.todos);
        },
        updateTodo: (state, action)=> {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo)
            saveTodosToStorage(state.todos);
        },
        setEditingTodo: (state, action) => {
            state.editingTodo = action.payload
        },
        clearEditingTodo: (state) => {
            state.editingTodo = null
        }
    }

});

//step-4: hum individual functionalites ko export karte hn taki components mein help ho
export const {addTodo, removeTodo, updateTodo, setEditingTodo, clearEditingTodo} = todoSlice.actions;

// step-5: ab store ko bhi awareness chaiye hogi har kisi reducers ki 
export default todoSlice.reducer;