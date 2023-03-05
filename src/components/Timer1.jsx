import React, { useEffect, useState } from 'react'

const Timer1 = () => {
const[show,setshow]=useState(false)

useEffect(()=>{
    setTimeout(() => {
        setshow(!show)
    }, 2000);
},[])

  return (
    <div>
     {show && <h1>I am timer 1</h1>}
    </div>
  )
}

export default Timer1
