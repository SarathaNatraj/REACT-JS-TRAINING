import React from 'react'
import { useQuery } from 'react-query'
import envrionment from '../environment'
import axios from 'axios'
import RoomCard from './RoomCard'
import { Link } from 'react-router-dom'

export default function Rooms() {
    const { data, isLoading } = useQuery('rooms', () => {
        return axios.get(`${envrionment.apiUrl}/rooms`)
    })

    if (isLoading) {
        return <h2 className="text-light">Loading...</h2>
    }

    return (

        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <h5 className="text-light">ROOMS</h5>
                    <h6 style={{ color: '#696d97' }}>{data.data.length} Rooms available</h6>
                </div>
                <div className="col md-6">
                    <Link to="/create-room" className='btn btn-info float-end'><i className="fa-solid fa-plus"></i> Create Room</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {
                        data.data.map(item => <RoomCard key={item.id} id={item.id} host={item.createdBy} topicname={item.topicname} roomname={item.roomname} createdon={item.createdOn} usercount="15" />)
                    }
                </div>
            </div>
        </div>
    )
}
