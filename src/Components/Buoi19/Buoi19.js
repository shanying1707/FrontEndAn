import React from 'react'

function Buoi19({data, handleClick}) {
    const childData = 'child'
    return (
    <div>
        {<ul>{data}</ul>}
        <button onClick={()=>handleClick(childData)}>Click child</button>
    </div>
  )
}

export default Buoi19