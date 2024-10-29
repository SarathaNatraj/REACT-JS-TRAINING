import React from 'react'

async function getProduct(id) {
    return await fetch(`http://dummyjson.com/products/${id}`)
        .then(res => res.json())
}

export default function ProductDetails({ params }) {
    return (
        <div>
            {
                getProduct(params.product).then(data => <div className="card mb-3" style={{ maxWidth: "740px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={data.thumbnail} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.description}</p>
                                <p className="card-text"><small className="text-body-secondary">{data.price}</small></p>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    )
}
