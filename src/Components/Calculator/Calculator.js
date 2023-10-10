import React, {useState} from 'react'
import './Calculator.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
const Calculator = () => {
  const [numberA, setNumberA] = useState('')
  const [numberB, setNumberB] = useState('')

  const handleChangeNumberA = (e) => {
    setNumberA(e.target.value.replace(/^0+/,''))
  }
  const handleChangeNumberB = (e) => {
    setNumberB(e.target.value.replace(/^0+/,''))
  }

  const [result, setResult] = useState('')

  const Display = (type) => {
    if (type === '+'){
      setResult(Number(numberA) + Number(numberB))
    }
    else if (type === '-'){
      setResult(Number(numberA) - Number(numberB))

    }
    else if (type === '*'){
      setResult(Number(numberA) * Number(numberB))

    }
    else  {
      setResult(Number(numberA) / Number(numberB))

    }


  }

  // const handlePlus = (e) => {
  //   setResult(Number(numberA) + Number(numberB))

  // }
  // const handlleMinus = () => {
  //   setResult(parseInt(numberA) - parseInt(numberB))
  // }
  // const handleMultiple = () => {
  //   setResult(parseInt(numberA) * parseInt(numberB))
  // }
  // const handleDivide = () => {
  //   setResult(parseInt(numberA) / parseInt(numberB))
  // }

  return (
    <div className='container'>
        <form>
            <h2 className='result'>
                {result}
            </h2>
            <Input name="Number A" value={numberA} handleChange={handleChangeNumberA} />
            <Input name="Number B" value={numberB} handleChange={handleChangeNumberB} />
            {/* <input placeholder='Number A' value={numberA} onChange={handleChangeNumberA} type='number'></input>
            <input placeholder='Number B' value={numberB} onChange={handleChangeNumberB} type='number'></input>    */}
            
        </form>
        <div className='btnContainer'>
            {/* <button onClick={() => Display('+')}>+</button>
            <button onClick={() => Display('-')}>-</button>
            <button onClick={() => Display('*')}>*</button>
            <button onClick={() => Display('/')}>/</button> */}
            <Button symbol="+" operator={Display} />
            <Button symbol="-" operator={Display} />
            <Button symbol="*" operator={Display} />
            <Button symbol="/" operator={Display} />
        </div>
    </div>
  )
}

export default Calculator