import React, { useEffect, useState } from 'react'
import axios from 'axios'
 

const Useeffect = () => {
const [count, setCount] = useState(0)
const [name ,setName]=useState("")
const increment=(()=>{

    setCount(count+1)

})

const endpoint =`https://jsonplaceholder.typicode.com/users/${count}`
useEffect(() => {
  axios.get(endpoint).then((res)=>{
    console.log(res)
    setName(res.data.name)
  })

  
}, [count])






  return (
    <div>
        <h1>Counter </h1>
        <h2>{count}</h2>
        <button onClick={increment}>Click me</button>
        <h1>{name}</h1>
    </div>
  )
}

export default Useeffect