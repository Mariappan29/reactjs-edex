import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const[state,setSater]=useState("green")
    useEffect(()=>{
        console.log("welcome")
    },[state])
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>setSater("red")}>click</button>
    </div>
  )
}

export default Useeffect
