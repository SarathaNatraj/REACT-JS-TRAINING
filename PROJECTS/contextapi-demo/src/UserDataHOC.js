import React, { useState, useEffect } from 'react'

export default function UserDataHOC(Component) {
    const NewComponent = () => {
        const [users, setusers] = useState([]);
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => setusers(data));
        }, [])
        return <Component users={users}/>
    }
    return NewComponent;
}
