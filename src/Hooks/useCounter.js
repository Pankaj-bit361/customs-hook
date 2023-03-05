import React from 'react'
import { useState } from 'react'
const useCounter = (initialValue,payload) => {

 const [state,setstate]=useState(initialValue)
 let fun=()=>{
    setstate((prev)=>prev+payload)
 }
 return [state,fun]
}

export default useCounter
