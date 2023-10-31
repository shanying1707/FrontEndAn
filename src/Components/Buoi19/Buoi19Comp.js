import React from 'react'

function Buoi19Comp1() {
  return (
    <div>
      <Buoi19Comp2>
        <div>
          hello
        </div>
      </Buoi19Comp2>
    </div>
  )
}

export default Buoi19Comp1

export function Buoi19Comp2(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

