import React, { useState } from 'react'
import './Random.css'

function Random() {
  const [max,setMax] = useState('')
  const [min,setMin] = useState('')
  const [random,setRandom] = useState('0')


  const handleMax = (e)=>{
    setMax(e.target.value)
  }
  const handleMin = (e)=>{
    setMin(e.target.value)
  }
  const handleRandom = () =>{
    setRandom(Math.floor(Math.random() * (max - min + 1) + min));
  }

  console.log('max', max)
  console.log('min', min)
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