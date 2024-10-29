import React from 'react'
import { useEffect, useState } from "react";
export default function Sample() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        products.length !== 0 ? <div className="App">
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item => <tr key={item.id}>
                            <td><img src={item.thumbnail} alt="" width="50%" /></td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.rating}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div> : <h2>Loading....</h2>
    );
}
