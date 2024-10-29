import React, { useState } from "react";


function MessageInput({onMessageSubmit}){

    const[message,setMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        onMessageSubmit(message);
        setMessage('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                placeholder="Type your message"/>
            
            <button type="submit">Send</button>


        </form>
    )

}

export default MessageInput;