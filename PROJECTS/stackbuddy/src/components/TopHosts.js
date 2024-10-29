import React from 'react'
import { useQuery } from "react-query";
import axios from 'axios';
import envrionment from '../environment';


export default function TopHosts() {
    const { data, isLoading } = useQuery('hosts', () => {
        return axios.get(`${envrionment.authUrl}/tophosts`)
    })
    if (isLoading) {
        return <h2 className="text-light">Loading...</h2>
    }
    return (
        <div className="card mt-3" style={{ backgroundColor: '#3f4156' }}>
            <div className="card-header text-light" style={{ backgroundColor: '#696d97' }}>TOP HOSTS</div>
            <div className="card-body">
                <ul className="list-group mt-3">
                    {
                        data.data.map((item, i) => <li key={i} className='list-group-item bg-transparent border-0 text-light mb-3'>
                            <img src={`${envrionment.picUrl}/${item.profilepic}`} alt="" className='rounded-circle border border-info border-2' style={{width: '50px'}} />
                            <span className="text-light px-2">{item.firstname} {item.lastname}</span>
                            <button className="btn btn-info float-end btn-sm mt-2">Follow</button>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}
