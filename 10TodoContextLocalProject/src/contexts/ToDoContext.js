import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    //this is just sample that how my each todo look like
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {}
})

// created own custome hook useTodo
export const useTodo = () => {
    return useContext(ToDoContext)
}


export const TodoProvider = ToDoContext.Provider;