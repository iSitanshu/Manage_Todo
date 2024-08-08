import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './Contexts'

function App() {
  const [todos , setTodos] = useState([])
  const [addTodos, setAddTodos] = useState()


  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(),...todo},...prev])
  }

  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id? todo : prevTodo)))
  }


  return (
    <TodoProvider value={{todos, addTodo , updateTodo, deleteTodo, toggleComplete}}>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
    </TodoProvider>
  )
}

export default App
