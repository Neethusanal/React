import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const Keys = () => {
    
    const products=    [{id:1, name:"Laptop",Brand:"DELL",Qty:1},
                    {id:2, name:"Laptop",Brand:"HP",Qty:1},
                    {id:3, name:"Laptop",Brand:"ACCER",Qty:1} ]

   const [items, setItem] = useState(products)
   const  changeQuantity=(id)=>{
    console.log(id  )
    const newitem=items.map((item)=>
    item.id===id?{...item,quantity:item.quantity+1}:item
    )
    setItem(newitem);
   };

  return (
    <div >
        {items.map((products)=>{
       return <div className='bg-warning m-2'key={products.id}>
        <h1>{products.name}</h1>
        <h3>Brand:{products.Brand}</h3>
        <h4>Qty:{products.Qty}</h4>
        <Button onClick={()=>changeQuantity(products.id)}>+</Button>
        </div>}
        )}
    </div>
  )
}

export default Keys