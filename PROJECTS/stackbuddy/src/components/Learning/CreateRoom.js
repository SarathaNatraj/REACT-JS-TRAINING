import axios from 'axios';
import React, { useState } from 'react'

export default function CreateRoom() {
    const [topicname, setTopicname] = useState('');
    const [roomname, setRoomname] = useState('');
    const [roomdesc, setRoomdesc] = useState('');

    function submitHandler(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/rooms', { topicname, roomname, roomdesc })
            .then(res => console.log('Room Created Successfully'))
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card" style={{ backgroundColor: '#3f4156' }}>
                        <h5 className="card-header text-light" style={{ backgroundColor: '#696d97' }}>CREATE NEW ROOM</h5>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="topicname" className="form-label text-light">Topic Name</label>
                                    <input type="text" onChange={(e) => setTopicname(e.target.value)} className="form-control" id="topicname" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="roomname" className="form-label text-light">Room Name</label>
                                    <input type="text" onChange={(e) => setRoomname(e.target.value)} className="form-control" id="roomname" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="roomdesc" className="form-label text-light">Room Name</label>
                                    <textarea id="roomdesc" onChange={(e) => setRoomdesc(e.target.value)} cols="70" className='form-control'></textarea>
                                </div>
                                <button type='submit' className="btn btn-info">Create Room</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
