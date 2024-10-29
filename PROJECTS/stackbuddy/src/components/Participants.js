import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import axios from 'axios';
import envrionment from '../environment';
export default function Participants() {
    const { id } = useParams();
    const { data, isLoading } = useQuery('participants', () => {
        return axios.get(`${envrionment.apiUrl}/roomusers?roomid=${id}`)
    })
    if (isLoading) {
        return <h2 className="text-light">Loading...</h2>
    }
    return (
        <div className="card mt-3" style={{ backgroundColor: '#3f4156' }}>
            <div className="card-header text-light" style={{ backgroundColor: '#696d97' }}>PARTICIPANTS</div>
            <div className="card-body">
                <ul className="list-group mt-3">
                    {
                        data.data.map((item, i) => <li key={i} className='list-group-item bg-transparent border-0 text-light mb-3'>
                            <img src="/images/no-profile-image.jpg" alt="" className='rounded-circle border border-info border-2' style={{ width: '50px' }} />
                            <span className="text-light px-2">{item.firstname} {item.lastname}</span>
                            <button className="btn btn-info float-end btn-sm mt-2">Follow</button>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}
