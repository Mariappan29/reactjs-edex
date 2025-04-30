import React, { createContext, useState } from 'react'
import Comp2 from './Comp2'


 export const userContext=createContext()
const Comp1 = () => {
    const[username,setexpot]=useState('mariappan')
  return (
    <div>
      <userContext.Provider value={username}>
        <h1>mari</h1>
        <Comp2 />
      </userContext.Provider>
    </div>
  )
}

export default Comp1
