import React, { useEffect,useState } from 'react'

const useTimer = (delay) => {
const [show,setshow]=useState(false)

useEffect(()=>{
setTimeout(()=>{
setshow((prev)=>!prev)
},delay)
})
  return show
}

export default useTimer
