import React, { useState } from 'react'
import './TempCon.css'

function TempCon() {
  const [type,setType] = useState('type')
  const [fah,setFah] = useState(0)
  const fDegree = ((9/5)*1 + 32)
  //const kDegree = -273.15

  const handleType = (e) => {
    setType(e.target.value)
    console.log('type',type)
  }
  const handleFah = (e) => {
    if(type > 0){
      setFah(fDegree + 32)
    }
    else{
      Number(fDegree)
    }
    console.log('F:',(fDegree + 32))
    console.log('C',fDegree)
  }

  return (
    <div className='container'>
        <div className='top'>
            Temperature Converter
        </div>
        
        <div className='mid'>
            <div>
              <span>Celsius</span>
              <span>Fahrenheit</span>
              <span>Kelvin</span>                  
            </div>               
        </div>
        
        <div className='bot'>
            <input placeholder='Type Temperature number here' onChange={handleType}/>
            <input placeholder='Type Temperature number here' onChange={handleFah}/>
            <input placeholder='Type Temperature number here' />
        </div>    
    </div>
  )
}

export default TempCon