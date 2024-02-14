import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const ReactToggle = () => {

    const [istoggle ,setIstoggle ]=useState('false')
    const handleToggle=()=>{
     setIstoggle(!istoggle)
    }
  return (
    <div>
    <h1>React Toggle</h1>
<Button onClick={handleToggle}>  {istoggle ? 'Toggle Off' : 'Toggle On'}</Button>
    </div>
  )
}

export default ReactToggle