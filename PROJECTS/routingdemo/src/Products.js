import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Products() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(prods => setProducts(prods.data.products));
    }, [])


    return (
        <div className="container">
            <div className="row">
                {
                    products.map(item => <div className="col-md-3">
                        <div class="card" style={{width: '18rem'}}>
                            <img src={item.thumbnail} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <p class="card-text">{item.description}</p>
                                    <p class="card-text">{item.brand}</p>
                                    <p class="card-text">{item.price}</p>
                                    <Link to={`/product/${item.id}`} class="btn btn-primary">See Details</Link>
                                </div>
                        </div>
                    </div>)
                }
            </div>
        </div >
    )
}
