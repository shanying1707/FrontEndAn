import React from 'react'

function Warning({toggle}) {
  return (
    <div>
        {toggle? 'Warning true' : 'Warning false'}

    </div>
  )
}

export default Warning