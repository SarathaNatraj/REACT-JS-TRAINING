"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    products.map(item => <div className='col-md-3' key={item.id}>
                        <div class="card">
                            <img src={item.thumbnail} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <p class="card-text">{item.description}</p>
                                    <p class="card-text">{item.price}</p>
                                    <Link href={`/products/${item.id}`} class="btn btn-primary">See Details</Link>
                                </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
