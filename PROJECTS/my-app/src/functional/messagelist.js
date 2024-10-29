import React from "react";


function MessageList({messages}){

    return(
        <ul>
            {messages.map((msg,index)=>(
                <li key={index}>{msg}</li>
            ))}
        </ul>
    );

}

export default MessageList;