import React from "react";
import MessageList from "./messagelist";
import MessageInput  from "./messageinput";
import { useState } from "react";

const MessagingApp = () =>{
    const[messages, setMessages] = useState([]);

    const handleNewMessage = (newMessage) =>{
      setMessages([...messages,newMessage]);
    }
  
    return (
      <div>
        <h1> Real time Messaging App</h1>
        <MessageInput onMessageSubmit={handleNewMessage}/>
        <MessageList messages={messages}/>
      
      </div>
    );

}

export default MessagingApp;