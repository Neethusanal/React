import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
const State=()=>{
    const [count,setCount]=useState(0);
    
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1)
    }

    return(
    <div>
        <h1>{count}</h1>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
    </div>)

}
export default State;