import React from 'react'
import axios from 'axios'
import { useQuery } from "react-query";

export default function Home() {

    const { data, isLoading, isFetching, isError, error } = useQuery('users', () => {
        return axios.get('https://jsonplaceholder.typicode.com/users1')
    });

    const { data: tododata, isLoading: todoLoading, isFetching: todoFetching } = useQuery('todos', () => {
        return axios.get('https://jsonplaceholder.typicode.com/todos')
    });

    console.log({ isLoading, isFetching })

    if (isLoading || todoLoading) {
        return <h2>Loading....</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <ul className="list-group">
                        {
                            data.data.map(item => <li key={item.id} className='list-group-item'>{item.name}</li>)
                        }
                    </ul>
                    <br />
                    <ul className="list-group">
                        {
                            tododata.data.map(item => <li key={item.id} className='list-group-item'>{item.title}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
