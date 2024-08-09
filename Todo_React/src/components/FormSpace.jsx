import React, { useState } from 'react'
import { useTodo } from '../Context/ContextTodo'

const FormSpace = () => {
    const [todo, setTodo] = useState([])
    const {todos,addTodo} = useTodo()

    const text = todos.todo

  return (
    <>
    <div>
        {todos.map((todo)=>(
            <h1  className='text-black p-12 border-black '>{todo.todo}</h1>
        ))}
    </div>
    </>
  )
}

export default FormSpace;