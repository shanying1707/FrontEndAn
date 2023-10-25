import React, { useEffect, useState } from 'react'
import './Random.css'

function Random() {
  const [max,setMax] = useState('')
  const [disable,setDisable] = useState(false)
  const [min,setMin] = useState({value: ''})
  const [random,setRandom] = useState(0)
  
  const handleMax = (e) => {
    setMax(Number(e.target.value))
  }
  const handleMin = (e) => {

    setMin(prev => ({...prev, value: Number(e.target.value)}) )
      // Number(e.target.value))
    console.log('min',min.value)
    console.log('max',max)
    
  }
  const handleRandom = () => {    
      
    setRandom(Math.floor(Math.random() * (max - min.value) + min.value));   
  }
    const handleCheck = () =>{
      if (min.value > max && max!==''){
        alert('no')
        setDisable(true)
      }
     
     
    }
    useEffect(()=>{
      handleCheck()
    }, [min, max])
  return (
    <div className='container'>
        <div>{random}</div>
        <form>
            Max:<input type='number' placeholder='Type max number here' value={max} onChange={handleMax}/>
            Min:<input type='number' placeholder='Type min number here' value={min.value} onChange={handleMin}/>
        </form>
        <button onClick={handleRandom} disabled={disable}>Generate</button>
    </div>
  )
}

export default Random