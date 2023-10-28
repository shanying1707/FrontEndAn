import React, { useState } from 'react'
import Warning from './Warning'

function Page() {
    //state
    const [toggle,setToggle] = useState(false)
    const [inputVal,setInputVal] = useState({value1: '', value2: '', value3: '' 

})
  
    const handleToggle = () => {
        //cách 1:
        // if(toggle){
        //     setToggle(false)
        // }   
        // else{
        //     setToggle(true)    
        // }

        //cách 2:
        //toggle? setToggle(false) : setToggle(true)

        //cách 3:
        setToggle(!toggle)

    }
    const handleChange = (e) => {
        setInputVal({...inputVal, [e.target.name]: e.targer.value})
    }
    
    console.log('inputVal', inputVal)
  return (
    <div>
        <h1>Page</h1>
        <h2>Warning: <Warning toggle={toggle} /></h2>
        <button onClick={handleToggle}>Toggle warning</button>
        <input placeholder='input here' name='value1' value={inputVal.value1} onChange={handleChange}  />
        <input placeholder='input here' name='value2' value={inputVal.value2} onChange={handleChange}  />
        <input placeholder='input here' name='value3' value={inputVal.value3} onChange={handleChange}  />
        {/* không nhập được nếu không set value */}
        
</div>
  )
}

export default Page