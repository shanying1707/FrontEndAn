import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [result,setResult] = useState('0')
  const handleResult = (e) =>{
    setResult(e.target.value)
  }
  const [number1,setNumber1] = useState('0')
  const [number2,setNumber2] = useState('0')
  const handleChangeNum1 = (e) =>{
    setNumber1(e.target.value)
  }
  const handleChangeNum2 = (e) =>{
    setNumber1(e.target.value)
  }
  const plus = () =>{
    setResult(parseInt(number1) + parseInt(number2))
  }
  return (
    <>
    {/* <div>Calculator</div> */}
    <div className='container'>
      <div className='resultScreen'>
        <input value={number1} onChange={handleChangeNum1} />
        <input value={number2} onChange={handleChangeNum2} />
        <div onChange={handleResult}>
          {result}
        </div>
      </div>

      <div className='btn'>
        
        <div>
          <div>%</div>
          <div >1/x</div>
          <div>7</div>
          <div>4</div>
          <button onClick={number1} onChange={handleChangeNum1}>1</button>
          <div>+/-</div>
        </div>
        <div>
          <div>CE</div>
          <div>x2</div>
          <div>8</div>
          <div>5</div>
          <div onClick={number2}>2</div>
          <div>0</div>       
        </div>
        <div>
          <div>C</div>
          <div>2rx</div>
          <div>9</div>
          <div>6</div>
          <div>3</div>
          <div>.</div>         
        </div>
        <div>
          <div>del</div>
          <div>/</div>
          <div>x</div>
          <div>-</div>
          <div onClick={plus}>+</div>
          <div>=</div>         
        </div>
      </div>
   
        
       
        

    </div>

    </>
  )
}

export default Calculator