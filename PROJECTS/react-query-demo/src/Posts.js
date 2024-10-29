import { useState } from 'react'
import { useQuery } from "react-query";
import axios from 'axios';

export default function Posts() {
    const [pagenumber, setPagenumber] = useState(0);
    const NextPage = () => {
        setPagenumber((prevState) => prevState + 10);
    }
    const PrevPage = () => {
        setPagenumber((prevState) => prevState - 10);
    }
    const { data, isLoading, isFetching } = useQuery(['posts', pagenumber], () => {
        return axios.get(`https://dummyjson.com/posts?limit=4&skip=${pagenumber}`)
    }, {
        keepPreviousData: false
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="container mt-2">
            {isFetching ? <h3>Fetching Again....</h3> : null}
            <div className="row">
                {
                    data.data.posts.map(item => <div className="col-md-12 mb-2" key={item.id}>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{item.title}</h5>
                                <p class="card-text">{item.body}</p>
                                {
                                    item.tags.map(tag => <span class="badge text-bg-primary me-2">{tag}</span>)
                                }
                                <p class="card-text">Reactions: {item.reactions}</p>
                            </div>
                        </div>
                    </div>)
                }
                <div className="text-center">
                    <button className="btn btn-primary me-3" disabled={pagenumber == 0} onClick={PrevPage}>Prev</button>
                    <button className="btn btn-primary" onClick={NextPage}>Next</button>
                </div>
            </div>
        </div>
    )
}
