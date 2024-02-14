import React, { useState } from "react"
import { Button } from 'react-bootstrap';

const Header = () => {
    const[color,setColor]= useState("Green");
    const[count,setCount]= useState(0)
    const changeColor=()=>{
    
        setColor("Red");
        console.log(color);
        
    };
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);

    };
  return (
  
  <>
<h1 className='bg-secondary text-white'>useStateHook in React</h1>
<h2 className="text-warning">My favourite color is {color}</h2>
<button onClick={changeColor}>change color</button>
<br/>
<br/>
<h1>counter is {count}</h1>
<Button onClick={increment} className="m-2 bg-success">+</Button>
<Button onClick={decrement} className="m-2 bg-danger">-</Button>

  </>
  )
}

export default Header