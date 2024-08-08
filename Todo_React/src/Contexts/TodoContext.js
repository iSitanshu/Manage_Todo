import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

export const TodoContext = createContext({
    todos:[

    ],
    addTodo: (todo)=>{},
    updateTodo: ()=>{},
    deleteTodo: ()=>{},
    toggleComplete: (id)=>{},
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}