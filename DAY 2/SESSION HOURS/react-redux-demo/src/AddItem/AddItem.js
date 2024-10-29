import React, { useState } from 'react'
import { v1 as uuidv1 } from "uuid";
import { addItem } from "../Redux/actions";
import { connect } from "react-redux";

function AddItem(props) {
    const [text, setText] = useState('');

    function AddItemHandler() {
        const newItem = {
            id: uuidv1(),
            text: text
        }
        props.addItem(newItem);
    }

    return (
        <div className="input-group mb-3">
            <input type="text" onChange={(e)=> setText(e.target.value)} className="form-control" placeholder="Enter Text" />
            <button onClick={AddItemHandler} className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todoList: state?.todoList
})

export default connect(mapStateToProps, { addItem })(AddItem);
