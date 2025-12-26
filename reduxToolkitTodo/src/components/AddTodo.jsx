import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, updateTodo, clearEditingTodo} from '../features/todo/todoSlice'
function AddTodo() {
// addtodo store ke ander kuch add karna or add kese hoga dispatch se
// to kuch na kuch dispatch karna padega


    const [input, setInput] = useState('')
    const [lastEditingId, setLastEditingId] = useState(null)
    const dispatch = useDispatch()
    const editingTodo = useSelector(state => state.editingTodo)
    const todos = useSelector(state => state.todos)

    // Initialize input when editing starts (only once per editing session)
    if (editingTodo && editingTodo !== lastEditingId) {
        const todo = todos.find(todo => todo.id === editingTodo)
        if (todo) {
            setInput(todo.text)
            setLastEditingId(editingTodo)
        }
    } else if (!editingTodo && lastEditingId) {
        setInput('')
        setLastEditingId(null)
    }

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (editingTodo) {
            dispatch(updateTodo({id: editingTodo, text: input}))
            dispatch(clearEditingTodo())
        } else {
            dispatch(addTodo(input))
        }
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                {editingTodo ? 'Update Todo' : 'Add Todo'}
            </button>
        </form>
    )
}

export default AddTodo;
