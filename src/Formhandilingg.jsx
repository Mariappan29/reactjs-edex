import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Formhandilingg = () => {
const navigate=useNavigate()
    const[form,setform]=useState({
        username:"",
        password:"",
        cpassword:"",
        email:"",
    })

    const handlechage =(event) =>{
        console.log(event);
          

        const {name, value} =event.target ;


        setform({ ...form, [name]: value})

        console.log(name,value);
        console.log(form);


        
       }
       const functionname = () => {
        navigate('/home')
        console.log(`username: ${form.username}`)
        console.log(`password: ${form.password}`)
        console.log(`username: ${form.cpassword}`)
        console.log(`password: ${form.email}`)
        }
    
  return (
    <div>
      <label>username</label>
      <input type="text" name="username" onChange={handlechage} value={form.username}></input>
      <label>password</label>
      <input type="text" name="password" onChange={handlechage} value={form.password}></input>
      <label>cpassword</label>
      <input type="text" name="cpassword" onChange={handlechage} value={form.cpassword}></input>
      <label>email</label>
      <input type="text" name="email" onChange={handlechage} value={form.email}></input>
      <button onClick={functionname}>sign</button>

      <Link to='/home'>click</Link>
    </div>
  )

}
export default Formhandilingg
