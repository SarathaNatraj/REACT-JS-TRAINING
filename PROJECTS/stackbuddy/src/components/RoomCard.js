import React from 'react'
import { Link } from 'react-router-dom'

import moment from 'moment'
export default function RoomCard({ id, host, roomname, topicname, usercount, createdon }) {


    return (
        <div className="card mb-4" style={{ backgroundColor: '#3f4156' }}>
            <div className="crad-body px-3 py-3">
                <img src="/images/no-profile-image.jpg" alt="" className="rounded-circle border border-info border-2" style={{ width: '50px' }} />
                <Link to={`/view-profile/${id}`} className="link-info text-decoration-none px-2">Host @{host}</Link>
                <span className="text-light float-end">{moment(createdon).fromNow()}</span>
                <h3 className="card-title mt-3 mb-3"><Link to={`/room/${id}`} className='btn btn-link text-decoration-none text-info'>{roomname}</Link></h3>
                <img src="/images/no-profile-image.jpg" alt="" className="rounded-circle border border-info border-2" style={{ width: '50px' }} />
                <div className="text-light"><hr /></div>
                <i className="fa-solid fa-user text-info"></i>
                <span className="text-light px-3">{usercount} Joined</span>
                <span className="badge rounded-pill text-bg-primary float-end">{topicname}</span>
            </div>
        </div>
    )
}
