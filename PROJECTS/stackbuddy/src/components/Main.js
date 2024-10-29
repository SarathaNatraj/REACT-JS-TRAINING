import React from 'react'
import Rooms from './Rooms'
import CreateRoom from './CreateRoom'
import SignUp from './SignUp'
import { Outlet } from 'react-router-dom'
import TopHosts from './TopHosts'
import Topics from './Topics'


export default function Main() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Topics />
                </div>
                <div className="col-md-6">
                    <Outlet />
                </div>
                <div className="col-md-3">
                    <TopHosts />
                </div>
            </div>
        </div>
    )
}
