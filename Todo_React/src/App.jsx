import React from 'react'
import FormInput from './components/FormInput'
import {TodoProvider} from './Context/ContextTodo'
import { useState } from 'react'
import FormSpace from './components/FormSpace'

const App = () => {
  const [todos, setTodos] = useState([])

  console.log(todos)

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  return (
    <TodoProvider value={{todos, addTodo}}>
    <div className='bg-blue-500 p-11'>
      <FormInput />
    </div>
    <FormSpace />
    </TodoProvider>
  )
}

export default App