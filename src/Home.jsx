import React from 'react'
import About from './About'
import Contact from './Contact'
import Test from './Test'

function Home(props) {
  return (
    <div>
      <h1 style={{backgroundColor:'red'}}>hello {props.a}</h1>
      <h2 className='head'>mariappan</h2>


      <Test />
    </div>
  )
}

export default Home
