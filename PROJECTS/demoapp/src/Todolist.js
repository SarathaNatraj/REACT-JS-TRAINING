import React, { useEffect, useState } from 'react'

export default function Todolist() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data.todos));
    }, [])

    return (
        todos.length !== 0 ?
            <ul>
                {
                    todos.map(item => <li key={item.id}>{item.todo}</li>)
                }
            </ul> : null
    )
}
