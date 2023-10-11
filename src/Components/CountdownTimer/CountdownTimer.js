import React, {useState,useEffect, useRef} from 'react'
import './CountdownTimer.css'

// const CountdownTimer = ({duration}) => {
//     const [time, setTime] = useState(duration)

//     useEffect(() => {
//         setTimeout(() => {
//             setTime(time - 1000);
//         }, 1000);
//     }, [time]);

//     const getFormattedTime = (milliseconds) => {
//         let total_seconds = parseInt(milliseconds / 1000)
//         let total_minutes = parseInt(total_seconds / 60)

//         let seconds = parseInt(total_seconds % 60);
//         let minutes = parseInt(total_minutes % 60);

//         return `${minutes}: ${seconds}`;
       
//     }
   

//   return (
//     <div>
//         <div className='container'>
//             Result {getFormattedTime(time)}
//             <button>Start</button>
//             <button>Reset</button>
//         </div>
//     </div>
//   )
// }
const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    const difference = +new Date(`12/12/${year}`) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
        timeLeft = {
        days: Math.floor((difference) / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference) / (1000 * 60 * 60 )),
        minutes: Math.floor((difference) / (1000 * 60  )),
        seconds: Math.floor((difference) / (1000 )),
        }
    }
    return timeLeft
}
function CountdownTimer(){
    const [time, setTime] = useState(calculateTimeLeft())
    const [shouldRun, setShouldRun] = useState(true)
    const handleStart =(e)=>{
        e.preventDefault()
           }
    const handleReset =()=>{
        setShouldRun(false)
        setTime({})

    }

    useEffect(()=>{
        if (shouldRun) {
        const timer = setTimeout(()=>{
            setTime(calculateTimeLeft())
        }, 1000)
        return () => clearTimeout(timer)
    }
    })

    
    console.log('time',time)
    return(
        <div className='container'>
            <form>
                <div className='timer'>{time.days} Days, {time.hours} Hours, 
                {time.minutes} Minutes,{time.seconds} Seconds</div>
                <div className='btnContainer'>
                    <button onClick={handleStart}>Start</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default CountdownTimer