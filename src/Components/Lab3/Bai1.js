import React, { useState } from 'react'
import './Bai1.css'
const Bai1 = () => {
  const [value,setValue] = useState({number: [0], operator:''})
  
 
    
  const handleClickPlus= () => {
    setValue({...value,operator: '+'})      
  }
  const handleClickOne = () => {
    setValue({...value, number: [...value.number, 1]})
  }
  const handleClickTwo = () =>{
    setValue({...value, number: [...value.number, 2]})
  }  
  const handleResult=()=>{

    let result = 0
    if(value.operator==='+'){
      for(let i = 0 ; i < value.number.length; i++) {
          console.log(value.number[i])
          result = result + value.number[i]
      }
      setValue({...value, number: [...value.number, result]})
    }
    console.log(value)
    console.log(result)
  }
 

 
  return (
    <div className='container'>
        <div>{value.number[value.number.length-1]}</div>
        <div>AC</div>
        <div>-</div>
        <div>%</div>
        <div>/</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>x</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>-</div>
        <div onClick={handleClickOne}>1</div>
        <div onClick={handleClickTwo}>2</div>
        <div>3</div>
        <div onClick={handleClickPlus}>+</div>
        <div className='btnZero'>0</div>
        
        <div>.</div>
        <div onClick={handleResult}>=</div>
        
    </div>
    
  )
}

export default Bai1