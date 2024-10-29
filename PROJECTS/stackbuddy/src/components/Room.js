import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from 'axios';
import envrionment from '../environment';
import moment from 'moment/moment';
import { useSelector } from "react-redux";
import Participants from './Participants';
export default function Room() {
    const { id } = useParams();
    const [message, setMessage] = useState('');
    const [roomjoinstatus, setRoomjoinstatus] = useState(false);
    const [roomjoinid, setRoomjoinid] = useState();
    const user = useSelector((state) => state.auth.user.userData)
    const client = useQueryClient();
    useEffect(() => {
        axios.get(`${envrionment.apiUrl}/roomusers?roomid=${id}&userid=${user.id}`)
            .then(res => {
                if (res.data.length == 1) {
                    setRoomjoinstatus(true);
                    setRoomjoinid(res.data[0].id);
                }
            })
    }, [])

    const { mutate: sendMessage } = useMutation((values) => {
        return axios.post(`${envrionment.apiUrl}/conversations`, values);
    }, {
        onSuccess: (data) => {
            client.invalidateQueries('conversations');
        }
    });

    function submitHandler(e) {
        e.preventDefault();
        sendMessage({ message: message, roomid: id, timespan: new Date(), sentBy: user.email })
    }

    const { data, isLoading } = useQuery('room', () => {
        return axios.get(`${envrionment.apiUrl}/rooms/${id}`)
    });


    const { data: messageData, isLoading: messageIsLoading } = useQuery('conversations', () => {
        return axios.get(`${envrionment.apiUrl}/conversations?roomid=${id}`)
    })

    if (isLoading || messageIsLoading) {
        return <h2>Loading...</h2>
    }
    function joinRoom() {
        if (roomjoinstatus) {
            axios.delete(`${envrionment.apiUrl}/roomusers/${roomjoinid}`)
                .then(res => setRoomjoinstatus(false));

        } else {
            axios.post(`${envrionment.apiUrl}/roomusers`, { userid: user.id, roomid: id, firstname: user.firstname, lastname: user.lastname, email: user.email })
            setRoomjoinstatus(true);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-9">
                    <div className="card" style={{ backgroundColor: '#3f4156' }}>
                        <div className="card-header text-light py-3" backgroundColor='#696d97'>
                            <Link to="/"><i className="fa-solid fa-arrow-left"></i></Link> {data.data.roomname}
                        </div>
                        <div className="card-body px-5">
                            <span className="badge rounded-pill text-bg-secondary float-end">{data.data.topicname}</span>
                            <h4 className="card-title text-info">{data.data.roomname}</h4>
                            {
                                data.data.createdBy != user.email ? <button onClick={joinRoom} className="btn btn-outline-info rounded-pill px-4 py-2 float-end">{roomjoinstatus ? 'Leave Room' : 'Join Room'}</button> : null
                            }

                            <p className="text-light">{moment(data.data.createdOn).fromNow()}</p>
                            <p className="text-light">Hosted By</p>
                            <img src="/images/no-profile-image.jpg" alt="" className="rounded-circle border border-info border-2" style={{ width: '50px' }} />
                            <Link className="link-info px-2 text-decoration-none">{data.data.createdBy}</Link>
                            <form onSubmit={submitHandler}>
                                <div className="mb-3 px-3 py-3" style={{ height: '400px', overflowY: 'scroll' }}>
                                    <ul className="list-group">
                                        {
                                            messageData.data.map(item => <li className="list-group-item border-0 border-start border-info rounded-0 bg-transparent text-light mb-3">
                                                <img src="/images/no-profile-image.jpg" alt="" className="rounded-circle border border-info border-2" style={{ width: '25px', height: '25px' }} />
                                                <span className="text-info px-2">{item.sentBy}</span>
                                                <span className="text-light">{moment(item.timespan).fromNow()}</span>
                                                <p className="ms-5">{item.message}</p>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" onChange={(e) => setMessage(e.target.value)} className="form-control" placeholder='Type your message' />
                                    <button className="btn btn-secondary" type='submit'><i class="fa-regular fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <Participants />
                </div>
            </div>

        </div>
    )
}
