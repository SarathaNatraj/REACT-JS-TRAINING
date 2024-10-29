import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import envrionment from '../environment'
import { Link, useNavigate } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch } from "react-redux";
import { authActions } from "../redux/authSlice";
import { loginUser } from '../redux/authSlice'
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5 offset-md-3">
          <div className="card" style={{ backgroundColor: '#3f4156' }}>
            <h5 className="card-header text-light" style={{ backgroundColor: '#696d97' }}>LOGIN</h5>
            <div className="card-body">
              <h5 className="text-info text-center py-3">Find your study partner</h5>
              <Formik initialValues={{
                email: '',
                password: ''
              }} onSubmit={(values) => {
                // axios.post(`${envrionment.authUrl}/login`, values)
                //   .then(res => {
                //     //localStorage.setItem('token', res.data.access_token);
                //     dispatch(authActions.login(res.data.access_token));
                //     navigate('/');
                //   }).catch(err => {
                //     setOpen(true);
                //   })
                dispatch(loginUser(values))
                  .then(res => {
                    if (res.meta.requestStatus == 'fulfilled') {
                      // localStorage.setItem('token', res.payload.access_token)
                      navigate('/');
                    }else{
                      setOpen(true);
                    }
                  });
              }} validationSchema={yup.object().shape({
                email: yup.string()
                  .email('Invalid Email Address')
                  .required('Email is required'),
                password: yup.string()
                  .min(6, 'Password should have at least 6 characters')
                  .required('Password is required'),
              })}>
                <Form>
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

                  <button className="btn btn-info mb-4"><i className="fa-solid fa-lock"></i> Login</button>
                  <p className="text-light text-center">Haven't signed up yet?</p>
                  <p className="text-center"><Link to="/signup" className='text-info text-decoration-none'>Sign Up</Link></p>
                </Form>

              </Formik>
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
                  Invalid email or password!
                </Alert>
              </Snackbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
