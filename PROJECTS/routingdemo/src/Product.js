import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export default function Product() {
    let { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(prods => setProduct(prods.data));
    }, [])

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            {
                product.images ? product.images.map(item => <img src={item} />) : null
            }
        </div>
    )
}
