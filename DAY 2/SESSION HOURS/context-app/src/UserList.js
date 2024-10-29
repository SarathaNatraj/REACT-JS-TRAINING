import React from 'react'
import UserData from './UserData'

function UserList(props) {
    return (
        <div>
            <ul className="list-group">
                {
                    props.userData.map(item => <li className='list-group-item'>{item.name}</li>)
                }
            </ul>
        </div>
    )
}

export default UserData(UserList);
