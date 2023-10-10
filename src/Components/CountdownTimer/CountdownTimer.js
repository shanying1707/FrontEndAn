import React, {useState,useEffect} from 'react'
import './CountdownTimer.css'

const CountdownTimer = ({duration}) => {
    const [time, setTime] = useState(duration)

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000);
    }, [time]);

    const getFormattedTime = (milliseconds) => {
        let total_seconds = parseInt(milliseconds / 1000)
        let total_minutes = parseInt(total_seconds / 60)

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);

        return `${minutes}: ${seconds}`;
       
    }
   

  return (
    <div>
        <div className='container'>
            Result {getFormattedTime(time)}
            <button>Start</button>
            <button>Reset</button>
        </div>
    </div>
  )
}

export default CountdownTimer