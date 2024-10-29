import React from 'react'
import UserDataHOC from './UserDataHOC'

function TableUser(props) {
    if (props.users == undefined) {
        return <h2>Loading...</h2>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.users.map(item => <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                    <td>{item.address.city}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default UserDataHOC(TableUser);
