import React from 'react'
import { TodoProvider } from './Contexts/TodoContext'
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(),...todo},...prev])
  }
  const updateTodo = () => {}
  const deleteTodo = () => {}
  const toggleComplete = () => {}

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <h1 className='text-3xl font-bold underline'>Hellow</h1>
    </TodoProvider>
  )
}

export default App