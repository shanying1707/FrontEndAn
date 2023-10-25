import React, { useState } from 'react'
import './Random.css'

function Random() {
  const [max,setMax] = useState('')
  const [min,setMin] = useState('')
  const [random,setRandom] = useState(0)
  
  const handleMax = (e) => {
    setMax(Number(e.target.value))
  }
  const handleMin = (e) => {
    setMin(Number(e.target.value))
    if (min > max){
      alert('no')
    }
    else{}
  }
  const handleRandom = () => {    
      setRandom(Math.floor(Math.random() * (max - min) + min));   
  }
    console.log(Math.floor((Math.random() * 10) + 1) +1)
  return (
    <div className='container'>
        <div>{random}</div>
        <form>
            Max:<input type='number' placeholder='Type max number here' value={max} onChange={handleMax}/>
            Min:<input type='number' placeholder='Type min number here' value={min} onChange={handleMin}/>
        </form>
        <button onClick={handleRandom}>Generate</button>
    </div>
  )
}

export default Random