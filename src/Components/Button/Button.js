import React from 'react'

function Button({symbol, operator}) {
  return (
    <button 
    onClick={() => operator(symbol)}
    > {symbol}
    </button>
  )
}

export default Button