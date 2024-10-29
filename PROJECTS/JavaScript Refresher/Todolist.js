fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(data => {
        const todolist = document.getElementById('todos');
        data.todos.map(item => {
            const li = document.createElement('li');
            li.innerHTML = `<input type='checkbox'/> ${item.todo}`;
            li.className = 'list-group-item';
            todolist.appendChild(li);
        })
    });