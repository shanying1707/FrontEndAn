import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
function User({a,b}) {
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>User
        {a}
        {b}
        <input placeholder='KKKK' ref={inputRef}/>
    </div>
  )
}


export default User

User.propTypes = {
    a: PropTypes.string,
    b: PropTypes.string,
}

User.defaultProps = {
    a: 'aaa',
    b: 'bbb',
}