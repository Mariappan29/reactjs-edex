import React, { useState } from 'react'


const Use = () => {
    const[count,element]=useState({
      name:"",
      age:'',
      city:"",
      })
      function Obb(){
        element({
          name:'mariyappan',
          age:'20',
          city:'madurai'
        })
        
      }
  // return (
  //   <div>
  //     <p>{count.age}</p>
  //     <p>{count.name}</p>
  //     <button onClick={Obb}>object</button>
     
  //   </div>
  // )
}

export default Use
