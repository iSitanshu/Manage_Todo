import React, { useState } from 'react'
import { useTodo } from '../Context/ContextTodo'

const FormSpace = () => {
  const { todos, deleteTodo, updateTodo , toggleComplete } = useTodo()

  const remove = (id) => {
    if (todos.length > 0) {
      deleteTodo(id);
    }
  }

  const update = (id) => {
    updateTodo(id,todos)
  }

  const check = (id) => {
    toggleComplete(id)
  }

  return (
    <>
      <div className='flex flex-col justify-center text-center'>
        {todos.map((todo) => (
          <div className='flex justify-between text-center border-b-8'>
            <h1 className={`text-black p-12 ${todo.completed?"line-through":"none"} `}>{todo.todo}</h1>
            <div className='flex justify-center text-center gap-11'>
              <button onClick={()=>remove(todo.id)} className={`check`?"":""}>Remove</button>
              <button onClick={()=>update(todo.id)}>Update</button>
              <button onClick={()=>check(todo.id)}>Check</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default FormSpace;