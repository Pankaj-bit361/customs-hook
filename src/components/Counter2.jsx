import React from 'react'
import useCounter from '../Hooks/useCounter'
const Counter2 = () => {

    const [state,setfun]=useCounter(0,1)
  return (
    <div>
      <h2>Counter:{state}</h2>
    <button onClick={setfun}>add</button>
    </div>
  )
}

export default Counter2
