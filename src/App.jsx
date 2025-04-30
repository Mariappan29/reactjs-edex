import React, { useState } from 'react'
import Home from './Home'
import Sumaa from './Sumaa'
import Test from './Test'
import Sign from './Sign'
import Signup from './signup'
import Task1 from './Task1'
import Useeffect from './Useeffect'
import Formhandlihg from './Formhandlihg'
import Formhandilingg from './Formhandilingg'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Comp1 from './Comp1.jsx'
import Usearray from './assets/Usearray.jsx'
import Do from './Do.jsx'
import Useref from './Useref.jsx'
import Project from './Project.jsx'
import Pro_1 from './Pro_1.jsx'
// import Wsork from './Wsork.jsx'
// import { useState } from "react";
// import ClipLoader from "react-spinners/ClipLoader";




const App = () => {
 
  const [username,setUsername]=useState('mariappan')
  // const[veriablename ,functionname]=usestate(value)
  return (
    <div>
    

    
      {/* <button  >submit </button> */}
      {/* <Sumaa name={username}  /> */}
      
      {/* <Task1/>  */}
      {/* <Useeffect />  */}
      {/* <Formhandlihg /> */}
      {/* <Formhandilingg/> */}

      {/* <Test/> */}
      <BrowserRouter>
   <Routes>
  <Route path='/' element={<Pro_1 />}> </Route>
    {/* <Route path='/home' element={<Wsork />}></Route> */}
   
   </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


