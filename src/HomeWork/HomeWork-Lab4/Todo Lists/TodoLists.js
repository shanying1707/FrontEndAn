import React from 'react'
import './TodoLists.css'

function TodoLists() {
  

  return (
    <div className='container'>
      <div className= 'top'>
        Todo List
      </div>
      <div className='mid'>
        <ul>
          <li>1</li>
          <hr />
          <li>2</li>
          <hr />
          <li>3</li>
          <hr />
          <li>4</li>
          <hr />
          <li>5</li>          
        </ul>

      </div>
      <div className='bot'>
        <input placeholder= ' Add a new todo here...'/>
        <button>Add</button>
      </div>
        
    </div>
  )
}

export default TodoLists