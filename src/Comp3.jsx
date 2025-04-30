import React, { useContext } from 'react'
import { userContext} from './Comp1'

const Comp3 = () => {
    const username=useContext(userContext)
  return (
    <div>
      <h1>Welcomme {username}</h1>
    </div>
  )
}

export default Comp3
