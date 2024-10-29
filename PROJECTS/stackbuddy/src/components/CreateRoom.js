import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import envrionment from '../environment';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { v4 as uuidv4 } from 'uuid';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CreateRoom() {
    const [open, setOpen] = React.useState({ message: '', state: false, severity: 'success' });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen({state: false});
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-5 offset-md-3">
                    <div className="card" style={{ backgroundColor: '#3f4156' }}>
                        <h5 className="card-header text-light" style={{ backgroundColor: '#696d97' }}>CREATE NEW ROOM</h5>
                        <div className="card-body">
                            <Formik initialValues={{
                                topicname: '',
                                roomname: '',
                                roomdesc: 'No Description',
                            }} onSubmit={(values) => {
                                axios.post(`${envrionment.apiUrl}/rooms`, {...values, id: uuidv4(), createdOn: new Date(), createdBy: 'Dhiraj' })
                                    .then(res => setOpen({message: 'Room Created Successfully!', state: true, severity: 'success'}))
                                    .catch(err => setOpen({message: 'Something went wrong!', state: true, severity: 'error'}))

                            }} validationSchema={
                                yup.object().shape({
                                    topicname: yup.string()
                                        .min(3, 'Topic name is too short')
                                        .max(20, 'Topic name is too long')
                                        .required('Topic name is required'),
                                    roomname: yup.string()
                                        .min(3, 'Room name is too short')
                                        .max(20, 'Room name is too long')
                                        .required('Room name is required'),
                                    roomdesc: yup.string()
                                        .min(3, 'Room Description is too short')
                                        .max(50, 'Room Description is too long')
                                        .required('Room Description is required'),
                                })}>
                                <Form>
                                    <div className="mb-3">
                                        <label htmlFor="topicname" className="form-label text-light">Topic Name</label>
                                        <Field type="text" className="form-control" name="topicname" id="topicname" />
                                    </div>
                                    <ErrorMessage name="topicname" className='text-danger' component="div" />
                                    <div className="mb-3">
                                        <label htmlFor="roomname" className="form-label text-light">Room Name</label>
                                        <Field type="text" className="form-control" name="roomname" id="roomname" />
                                    </div>
                                    <ErrorMessage name="roomname" className='text-danger' component="div" />
                                    <div className="mb-3">
                                        <label htmlFor="roomdesc" className="form-label text-light">Room Description</label>
                                        <Field as="textarea" className="form-control" name="roomdesc" id="roomdesc" />
                                    </div>
                                    <ErrorMessage name="roomdesc" className='text-danger' component="div" />
                                    <button type='submit' className="btn btn-info">Create Room</button>


                                    {/* <div className="mb-3">
                                        <Field as="select" multiple="true" name="colors">
                                            <option value="red" selected>Red</option>
                                            <option value="green">Green</option>
                                            <option value="blue" selected>Blue</option>
                                        </Field>
                                    </div> */}

                                </Form>
                            </Formik>
                            <Snackbar open={open.state} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                                <Alert onClose={handleClose} severity={open.severity} sx={{ width: '100%' }}>
                                   {open.message}
                                </Alert>
                            </Snackbar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
