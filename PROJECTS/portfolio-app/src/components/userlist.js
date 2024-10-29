import React from 'react';
import User from './user';

const UserList = () =>{
    const users = [
        {name:'Alice', age: 25, email:'alice@gmail.com'},
        {name:'Bob', age: 30, email:'bob@gmail.com'},
        {name:'John', age: 30, email:'john@gmail.com'},
    ]

    return(
        <div>
            {users.map((users,index)=>(
                <User key={index} name={users.name} age={users.age} email={users.email}/>
            ))}
        </div>
    )
}


export default UserList;