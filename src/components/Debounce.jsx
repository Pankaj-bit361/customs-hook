import React from 'react'
import useDebounce from '../Hooks/useDebounce'

const Debounce = () => {
const handlecClick=()=>{
    console.log("Made a network request")
}

const debounce=useDebounce(handlecClick,1500)
  return (
    <div>
      <button onClick={debounce} >Debounce</button>
    </div>
  )
}

export default Debounce
