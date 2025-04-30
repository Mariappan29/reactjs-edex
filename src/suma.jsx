import React from 'react'

const suma = () => {
    let number=0
    function func(){
number++
console.log(number)
    }
    function myfunc(){
        number--
        console.log(number)
    }
  return (
    
    <div>
        <h1>{number}</h1>
      <button onClick={func}>+</button>
      <button onClick={myfunc}>-</button>
    </div>
  )
}

export default suma
