import React from 'react'
import { useTodo } from '../Context/ContextTodo'
import { useState } from 'react'

const FormInput = () => {
    const [todo, setTodo] = useState("")

    const {addTodo} = useTodo()

    const add = () => {
        if(!todo) return
        addTodo({todo,completed: false})
        setTodo("")
    }
    
  return (
    <>
    <div className='flex justify-center items-center text-black'>
    <input type="text"
    placeholder='Enter your task'
    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
    />
    <button className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
    onClick={add}
    >Add</button>
    </div>
    </>
  )
}

export default FormInput