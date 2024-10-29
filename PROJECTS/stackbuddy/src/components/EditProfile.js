import React from 'react'
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import envrionment from '../environment'
import MuiAlert from '@mui/material/Alert'
import { Link } from 'react-router-dom'
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import Snackbar from '@mui/material/Snackbar'


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function EditProfile() {
    const [open, setOpen] = React.useState(false);

    const user = useSelector((state) => state.auth.user.userData)

    const { data, isLoading } = useQuery('profile', () => {
        return axios.get(`${envrionment.authUrl}/user/${user.id}`)
    });

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5 offset-md-3">
                    <div className="card" style={{ backgroundColor: '#3f4156' }}>
                        <h5 className="card-header text-light" style={{ backgroundColor: '#696d97' }}>EDIT USER PROFILE</h5>
                        <div className="card-body">
                            <h5 className="text-info text-center py-3">Find your study partner</h5>
                            <Formik initialValues={data.data} onSubmit={(values) => {
                                axios.put(`${envrionment.authUrl}/edit/${user.id}`, values, {
                                    headers: {
                                        'Content-Type': 'multipart/form-data'
                                    }
                                }).then(res => setOpen(true))
                            }} validationSchema={yup.object().shape({
                                firstname: yup.string()
                                    .min(3, 'First Name is too short')
                                    .max(10, 'First Name is too long')
                                    .required('First Name is required'),
                                lastname: yup.string()
                                    .min(3, 'Last Name is too short')
                                    .max(10, 'Last Name is too long')
                                    .required('Last Name is required'),
                                password: yup.string()
                                    .min(6, 'Password should have at least 6 characters')
                                    .required('Password is required'),

                            })}>
                                {({ setFieldValue }) => (
                                    <Form>
                                        <label htmlFor="firstname" className='form-label text-light'>Profile Picture</label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                                            <Field type="file" value={undefined} onChange={(e) => {
                                                setFieldValue('profilepic', e.currentTarget.files[0])
                                            }} className="form-control" name="profilepic" />
                                        </div>
                                        <label htmlFor="firstname" className='form-label text-light'>First Name</label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                                            <Field type="text" className='form-control' name="firstname" />
                                        </div>
                                        <ErrorMessage name="firstname" className='text-danger' component="div" />

                                        <label htmlFor="lastname" className='form-label text-light'>Last Name</label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                                            <Field type="text" className='form-control' name="lastname" />
                                        </div>
                                        <ErrorMessage name="lastname" className='text-danger' component="div" />

                                        <label htmlFor="email" className='form-label text-light'>Email</label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                                            <Field type="text" disabled className='form-control' name="email" />
                                        </div>
                                        <ErrorMessage name="email" className='text-danger' component="div" />

                                        <label htmlFor="password" className='form-label text-light'>Password</label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                                            <Field type="password" className='form-control' name="password" />
                                        </div>
                                        <ErrorMessage name="password" className='text-danger' component="div" />

                                        <label htmlFor="bio" className='form-label text-light'>Bio</label>
                                        <div className="mb-3">
                                            <Field as="textarea" className='form-control' name="bio" />
                                        </div>
                                        <ErrorMessage name="bio" className='text-danger' component="div" />

                                        <button className="btn btn-info mb-4"><i className="fa-solid fa-lock"></i> Submit</button>
                                    </Form>
                                )}
                            </Formik>
                            <Snackbar open={open} autoHideDuration={6000} onClose={()=>setOpen(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                                <Alert onClose={()=>setOpen(false)} severity='success' sx={{ width: '100%' }}>
                                    Profile Updated Successfully
                                </Alert>
                            </Snackbar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
