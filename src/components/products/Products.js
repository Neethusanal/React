import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { phonesData } from './Product.data'

const Products = () => {

    const [items, setItems] = useState(phonesData)

    const decQty = (id) => {
        console.log(id)
        const newitem = items.map((item) => (
            item.id === id ? { ...item, qty: item.qty - 1 } : item
        ))
        setItems(newitem);
    };
    const incQty = (id) => {

        const newitem = items.map((item) => (
            item.id === id ? { ...item, qty: item.qty + 1 } : item
        ))
        setItems(newitem);

    };
    return (
        <div>
            <h1 className='bg-info text-white'>Products</h1>

            {items.map((item) => (
                <div className='d-inline-flex' key={item.id}>
                    <Card className='shadow p-3 mb-2 bg-body-tertiary rounded' style={{ width: '13rem' }}>
                        <Card.Img className="p-2" style={{ height: '10rem' }} variant="top" src={require(`./assets/${item.image}.jpeg`)} />
                        <Card.Body>
                            <Card.Title>{item.model}</Card.Title>
                            <Card.Text>
                                {item.desc}
                            </Card.Text>
                            <h5>₹ {item.price}</h5>
                            <div>
                                <p>Qty:
                                    <Button onClick={() => decQty(item.id)} className='m-1'>-</Button>
                                    {item.qty}
                                    <Button onClick={() => incQty(item.id)} className='m-1'>+</Button>
                                </p>
                            </div>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}


        </div>
    )
}

export default Products