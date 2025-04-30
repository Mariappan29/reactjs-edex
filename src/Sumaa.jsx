import React, { useState } from 'react'
import Use from './Use'
import Usearray from './assets/Usearray'
import Sign from './Sign'

      const Sumaa = (props) => {
       
        const [count,setCount]=useState(0)
        const [show,setShow] = useState(false)
        function func(){
    setCount(count+1)
        }

        function myfunc(){
   setCount(count-1)
        }
  return (
    
    <div>
      <h1>{props.name}</h1>
        <h1>{count}</h1>
      <button onClick={func}>+</button>
      <button onClick={myfunc}>-</button>
      {show== true ? <h1>true</h1>:<h1>false</h1>  }
      
      <Use/> 
      <Usearray />
      <Sign />
    </div>
  )
}

export default Sumaa
