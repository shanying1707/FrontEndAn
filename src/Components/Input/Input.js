import React from 'react'

function Input({name, value, handleChange}) {
  return (
    <input placeholder={name}
    value={value} 
    onChange={handleChange} 
    type='number' />
  )
}

export default Input