import React, { useRef, useState } from 'react'

const Useref = () => {

    const userRef=useRef(null)
    const [username, setUsername]=useState("")

    const handleClick= () => {
       console.log(userRef.current.value)
       setUsername(userRef.current.value)
    }

  return (
    <div>
      <input type='text' ref={userRef}/>
      <button onClick={handleClick}>click me</button>
      <h1>{username}</h1>
    </div>
  )
}

export default Useref
