import React from 'react'
import useTrottle from '../Hooks/useTrottle'

const Throttle = () => {
    const handleclick=()=>{
        console.log("Network request made")
    }
    const throttle=useTrottle(handleclick,1500)
  return (
    <div>
      <button onClick={throttle}>Throttle</button>
    </div>
  )
}

export default Throttle
