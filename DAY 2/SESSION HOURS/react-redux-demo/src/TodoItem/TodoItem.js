import React from 'react'
import { deleteItem } from "../Redux/actions";
import { connect } from "react-redux";

function TodoItem(props) {
    function DeleteItemHandler(id){
        props.deleteItem(id);
    }
    return (
        <li className="list-group-item">{props.text} <i onClick={DeleteItemHandler.bind(this, props.id)} className="fa-solid fa-trash-can text-danger float-end"></i></li>
    )
}

const mapStateToProps = (state) => ({
    todoList: state?.todoList
})

export default connect(mapStateToProps, { deleteItem })(TodoItem);
