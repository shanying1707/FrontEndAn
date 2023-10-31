import React, { useState } from 'react'
import Buoi19 from './Buoi19'

function Buoi19Parents({items}) {
    
    const mappedItems = items.map((item, index) => <li key={index}>id : {item.id}, name : {item.name}</li>)
    const [info,setInfo] = useState('')
    const handleClick = (data) => {
      console.log('data', data)
      setInfo(data)
    }
  return (

    <div>
        <h1>Child data: {info}</h1>
        <Buoi19 data={mappedItems} handleClick={handleClick} />
    </div>
  )
}

export default Buoi19Parents