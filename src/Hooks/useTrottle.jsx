import React, { useRef } from 'react'

const useTrottle = (func,delay) => {
  let {current:wait}=useRef(false)

  return ()=>{
    if(wait) return 
    func()
    wait=true
    setTimeout(()=>{
        wait=false;
    },delay);
  }

}

export default useTrottle
