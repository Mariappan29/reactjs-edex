import React, { useState } from 'react'

const Usearray = () => {
  // navigate('/home')
    const[veribale,fun]=useState([1,2,3,4,5,6])
    function fung(){
        veribale.push(7)
        console.log('hello');
        
        
    }
  return (
    <div>
        <p>{veribale}</p>
      <button onClick={fung}>ssubmit</button>
    </div>
  )
}

export default Usearray
