import React from 'react'
import { useQuery } from "react-query";
import axios from 'axios';
import { Navigate, Outlet } from "react-router-dom";
import envrionment from '../environment';
import { useSelector } from "react-redux";

export default function PrivateRoutes() {

    const user = useSelector((state) => state.auth.user)

    const { data, isLoading } = useQuery('auth', () => {
        return axios.get(`${envrionment.authUrl}/isAuthenticated`, {
            headers: {
                'Authorization': `Bearer ${user.access_token}`
            }
        })
    }, { retry: 2 })

    if (isLoading) {
        return <h2 className='text-light'>Loading....</h2>
    }

    return (
        data?.data.isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    )
}
