import { createContext } from 'react'
import { useContext } from 'react'


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo : ( todo ) => {},
    deleteTodo : ( todo , id ) => {},
    updateTodo: (todo , id ) => {},
    toggleComplete : ( id )=>{}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}