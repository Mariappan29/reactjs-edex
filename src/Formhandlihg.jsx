import React, { useState } from 'react'

const Formhandlihg = () => {
    const[username,Setusername]=useState()
    const[password,Setpassword]=useState()

const usernameonchage = (event) =>{
    Setusername(event.target.value)
    console.log(username)
}

const passwordonchage = (event) =>{
    Setpassword(event.target.value)
    console.log(password)
}

const onclick = () =>{
   console.log(`username: ${username}`)
   console.log(`password: ${password}`)
}


  return (

    <div>
      <label>username</label>
      <input type="text" name="username" onChange={usernameonchage} value={username}></input>
      <label>password</label>
      <input type="text" name="password" onChange={passwordonchage} value={password}></input>
      <button onClick={onclick}>sign</button>
    </div>
  )
}

export default Formhandlihg
