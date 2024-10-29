import React from 'react'
import { useFormik } from "formik";
import axios from 'axios';
import * as yup from 'yup';

export default function CreateRoom2() {
    const formik = useFormik({
        initialValues: {
            topicname: '',
            roomname: '',
            roomdesc: 'No Description'
        },
        onSubmit: (values) => {
            axios.post('http://localhost:3001/rooms', values);                
        },
        validationSchema: yup.object().shape({
            topicname: yup.string()
                .min(3, 'Topic name is too short')
                .max(10, 'Topic name is too long')
                .required('Topic name is required'),
            roomname: yup.string()
                .min(3, 'Room name is too short')
                .max(20, 'Room name is too long')
                .required('Room name is required'),
            roomdesc: yup.string()
                .min(3, 'Room Description is too short')
                .max(30, 'Room Description is too long')
                .required('Room Description is required'),
        })
    })
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card" style={{ backgroundColor: '#3f4156' }}>
                        <h5 className="card-header text-light" style={{ backgroundColor: '#696d97' }}>CREATE NEW ROOM</h5>
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="topicname" className="form-label text-light">Topic Name</label>
                                    <input type="text" name="topicname" value={formik.values.topicname} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" id="topicname" />
                                </div>
                                {formik.errors.topicname && formik.touched.topicname ? <p className='text-danger'>{formik.errors.topicname}</p>: null}
                                
                                <div className="mb-3">
                                    <label htmlFor="roomname" className="form-label text-light">Room Name</label>
                                    <input type="text" name="roomname" value={formik.values.roomname} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" id="roomname" />
                                </div>
                                {formik.errors.roomname && formik.touched.roomname ? <p className='text-danger'>{formik.errors.roomname}</p>: null}

                                <div className="mb-3">
                                    <label htmlFor="roomdesc" className="form-label text-light">Room Description</label>
                                    <textarea id="roomdesc" name="roomdesc" value={formik.values.roomdesc} onChange={formik.handleChange} onBlur={formik.handleBlur} cols="70" className='form-control'></textarea>
                                </div>
                                {formik.errors.roomdesc && formik.touched.roomdesc ? <p className='text-danger'>{formik.errors.roomdesc}</p>: null}

                                <button type='submit' className="btn btn-info">Create Room</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
