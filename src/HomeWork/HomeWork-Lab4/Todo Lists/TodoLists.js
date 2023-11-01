import React from 'react'
import './TodoLists.css'

function TodoLists() {

  return (
    <div className='container'>
      <div className= 'top'>
        Todo List
      </div>
      <div className='mid'>
        list
      </div>
      <div className='bot'>
        <input placeholder='Add a new todo here...'/>
        <button >Add</button>
      </div>
        
    </div>
  )
}

export default TodoLists