import React, { useEffect, useState } from 'react'
import './Buoi14.css'



function Buoi14() {
    // const [time,setTime] = useState(new Date())
//  useEffect(()=>{
//     const interval = setInterval(()=>{
//         setTime(new Date())
//     }, 1000)
//     return()=>{
//         clearInterval(interval)
//     }
//  },[])
 //   componentDidMount = useEffect(()=>{},[]) // xu ly gi do ngay khi component duoc tao ra
// componentWillUnmount = useEffect(()=>{ return () => {}},[]) // truoc khi component mat di thi xu ly gi do
const [number,setNumber] = useState(0)
const handleClick = () => {
    const result = number + 1
    setNumber(result)
}
useEffect(()=>{
    console.log('UE chay khi component render ra')
},[number])  
return (
    <>
    {/* <div>Time {time.toLocaleTimeString()}</div> */}

    <>Number: {number}</>
    <button onClick={handleClick}>Click</button>
    </>
  )
}
Buoi14.defaultProps ={

}
export default Buoi14