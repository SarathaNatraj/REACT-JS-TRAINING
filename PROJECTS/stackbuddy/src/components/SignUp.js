import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import envrionment from '../environment'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
export default function SignUp() {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5 offset-md-3">
                    <div className="card" style={{ backgroundColor: '#3f4156' }}>
                        <h5 className="card-header text-light" style={{ backgroundColor: '#696d97' }}>CREATE NEW ROOM</h5>
                        <div className="card-body">
                            <h5 className="text-info text-center py-3">Find your study partner</h5>
                            <Formik initialValues={{
                                firstname: '',
                                lastname: '',
                                email: '',
                                password: '',
                                bio: ''
                            }} onSubmit={(values) => {
                                axios.post(`${envrionment.authUrl}/register`, { ...values, id: uuidv4() })
                                .catch()
                            }} validationSchema={yup.object().shape({
                                firstname: yup.string()
                                    .min(3, 'First Name is too short')
                                    .max(10, 'First Name is too long')
                                    .required('First Name is required'),
                                lastname: yup.string()
                                    .min(3, 'Last Name is too short')
                                    .max(10, 'Last Name is too long')
                                    .required('Last Name is required'),
                                email: yup.string()
                                    .email('Invalid Email Address')
                                    .required('Email is required'),
                                password: yup.string()
                                    .min(6, 'Password should have at least 6 characters')
                                    .required('Password is required'),
                                confirmpassword: yup.string()
                                    .min(6, ' Confirm Password should have at least 6 characters')
                                    .required('Confirm Password is required')
                                    .test('confirmpassword', 'Password and confirm password does not match', function (pass) {
                                        if (this.parent.password === pass) {
                                            return true;
                                        }
                                        return false;
                                    })

                            })}>
                                <Form>
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
                                        <Field type="text" className='form-control' name="email" />
                                    </div>
                                    <ErrorMessage name="email" className='text-danger' component="div" />

                                    <label htmlFor="password" className='form-label text-light'>Password</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                                        <Field type="password" className='form-control' name="password" />
                                    </div>
                                    <ErrorMessage name="password" className='text-danger' component="div" />

                                    <label htmlFor="confirmpassword" className='form-label text-light'>Confirm Password</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                                        <Field type="password" className='form-control' name="confirmpassword" />
                                    </div>
                                    <ErrorMessage name="confirmpassword" className='text-danger' component="div" />

                                    <label htmlFor="bio" className='form-label text-light'>Bio</label>
                                    <div className="mb-3">
                                        <Field as="textarea" className='form-control' name="bio" />
                                    </div>
                                    <ErrorMessage name="bio" className='text-danger' component="div" />

                                    <button className="btn btn-info mb-4"><i className="fa-solid fa-lock"></i> Register</button>
                                    <p className="text-light text-center">Already Sign Up?</p>
                                    <p className="text-center"><Link to="/login" className='text-info text-decoration-none'>Sign In</Link></p>
                                </Form>

                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
