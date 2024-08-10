import React from 'react'
import FormInput from './components/FormInput'
import {TodoProvider} from './Context/ContextTodo'
import { useState } from 'react'
import FormSpace from './components/FormSpace'

const App = () => {
  const [todos, setTodos] = useState([])

  console.log("todos", todos)

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => 
    (prevTodo.id === id ? todo : prevTodo )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }


  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
    <div className='bg-blue-500 p-11'>
      <FormInput />
    </div>
    <FormSpace />
    </TodoProvider>
  )
}

export default App