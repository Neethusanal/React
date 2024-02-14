import React, { useState } from 'react'
const Colorchange=()=>{
    const [color,SetColor]=useState("green")
    const changecolor=()=>{
        SetColor("Red")
    }
    return(
        <div>
        <h1 style={{color:color}}>Hi I am learning react</h1>
        <button onClick={changecolor}
        >click me</button>

        </div>
    )
}
export  default Colorchange;