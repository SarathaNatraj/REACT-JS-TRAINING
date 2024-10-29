import React from 'react'
import { connect } from 'react-redux';
import { getItems } from "../Redux/actions";
import TodoItem from '../TodoItem/TodoItem'

function TodoList(props) {

    React.useEffect(() => {
        props.getItems();
    }, [])

    return (
        <ul className="list-group">
            {
                props.todoList.map(todoItem => <TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.text} />)
            }
        </ul>
    )
}

const mapStateToProps = (state) => ({
    todoList: state?.todoList
})

export default connect(mapStateToProps, { getItems })(TodoList);