import React from 'react'
import useTimer from '../Hooks/useTimer'

const Timer2 = () => {
  const show=useTimer(2000)
  return (
    <div>
      {show && <h1>This is timer 2</h1>}
    </div>
  )
}

export default Timer2
