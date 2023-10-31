import React from 'react'
import Buoi19Parents from './Buoi19Parents'


function Buoi19GrandParents() {
    const students = [{id:1, name: 'a'},{id:2, name: 'b'},{id:3, name: 'c'}]
  return (
    <div>
        <Buoi19Parents items={students} />
    </div>
  )
}

export default Buoi19GrandParents