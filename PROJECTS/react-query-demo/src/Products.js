import axios from 'axios';
import React from 'react'
import { useQuery } from "react-query";
export default function Products() {
    const { data, isLoading } = useQuery('products', () => {
        return axios.get('http://localhost:3001/products')
    },
        {
            cacheTime: 5000
        }
    )


    if (isLoading) {
        return <h2>Loading....</h2>
    }
    return (
        <div className="App">
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
                        data.data.map(item => <tr key={item.id}>
                            <td><img src={item.thumbnail} alt="" width="50%" /></td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.rating}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
