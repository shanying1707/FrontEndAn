import React from 'react'
import User from '../User/User'

function UserPage() {
    const value1 = 1
    const value2 = '2'
  return (
    <div>UserPage
        <User a={value1} b={value2}/>
    </div>
  )
}

export default UserPage