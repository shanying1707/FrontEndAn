import React, { useState } from 'react'
import './Converter.css'
import ReactCountryFlag from "react-country-flag"

function Converter() {
    const [value,setValue] = useState(0)
    const [from,setFrom] = useState('VND')
    const [to,setTo] = useState('USD')
    const [icon,setIcon] = useState('VND')
    const handleConvert = (from,to) => {
        // if(from === 'VND' && to === 'USD')
        // setValue(value/24000)
        // else if (from === 'VND' && to === 'EUR')
        // setValue(value/30000)
        // else if (from === 'USD' && to === 'VND')
        // setValue(value*24000)
        // else if (from === 'USD' && to === 'EUR')
        // setValue(value*0.07)
        // else if (from === 'EUR' && to === 'VND')
        // setValue(value*30000)
        // else if (from === 'EUR' && to === 'USD')
        // setValue(value/0.07)

        if(from ==='VND'){
            if(to ==='USD') {
                setValue(value/24000)
                setIcon('$')
            }
            if(to ==='EUR') {
                setValue(value/30000)
                setIcon('E')
            }
        }
        else if(from ==='USD'){
            if(to ==='VND') {
                setValue(value*24000)
                setIcon('Dong')
            }
            if(to ==='EUR') {
            setValue(value*0.07)
            setIcon('E')
            }
        }
        else if(from ==='EUR'){
            if(to ==='VND') {
                setValue(value*30000)
                setIcon('E')
            }
            if(to ==='USD') {
                setValue(value/0.07)
                setIcon('$')
            }
        }

       
    }

    

  
    
    const handleChangeValue = (e) => {
        setValue(e.target.value)
    }
    // console.log('value',value)
    const handleOnChangeFrom = (e) => {
        console.log('E',e.target.value)
        setFrom(e.target.value)
    }
    // console.log('value',value)
    const handleOnChangeTo = (e) => {
        console.log('E',e.target.value)
        setTo(e.target.value)
    }
  return (
    <div>
        <div>
        Converter
        </div>
        <div className='inputContainer'>        
            <span>{icon}</span>
            <input type='number' value={value} onChange={handleChangeValue}/>
            <label>From</label>
            <select value={from} name='from' id="from" onChange={handleOnChangeFrom}>
                <option value="VND"><ReactCountryFlag countryCode="VN" />VND</option>
                <option value="USD"><ReactCountryFlag countryCode='US' />USD</option>
                <option value="EUR"><ReactCountryFlag countryCode='EU' />EUR</option>
            </select>
            <label>To</label>
            <select value={to} name='to' id="to" onChange={handleOnChangeTo}>
                <option value="VND"><ReactCountryFlag countryCode='VN' />VND</option>
                <option value="USD"><ReactCountryFlag countryCode='US' />USD</option>
                <option value="EUR"><ReactCountryFlag countryCode='EU' />EUR</option>
            </select>
            
            
        </div>
        
        <div>
            <button className='btnConvert' onClick={()=>handleConvert(from,to)}>Convert</button>
        </div>
    </div>
  )
  }

export default Converter