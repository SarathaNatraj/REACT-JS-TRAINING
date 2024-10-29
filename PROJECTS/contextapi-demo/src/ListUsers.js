import React from 'react'
import UserDataHOC from './UserDataHOC'

function ListUsers(props) {
    if (props.users == undefined) {
        return <h2>Loading...</h2>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <ul className="list-group">
                        {
                            props.users.map(item => <li className='list-group-item'>{item.name}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserDataHOC(ListUsers);