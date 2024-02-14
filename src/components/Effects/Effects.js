import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'

const Effects = () => {

    const [Counter, setCounter] = useState(0)
    const [Counter1, setCounter1] = useState(0)

    useEffect(()=>{
        console.log("side Effects")
    },[Counter1])
  return (
    <div>
    <div>
        <h1>{Counter}
        </h1>
        <Button onClick={()=>setCounter(Counter+1)} type= "button">+</Button>
        
    </div>

<div>
<h1>{Counter1}
</h1>
<Button onClick={()=>setCounter1(Counter1+1)} type= "button">+</Button>

</div>
</div>
  )
}

export default Effects