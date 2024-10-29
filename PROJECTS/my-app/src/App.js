import logo from './logo.svg';
import './App.css';
import Login from './functional/Login';
import Headline from './functional/headline';
import Employee from './functional/employee';
import Counter from './functional/counter';
import Demo from './functional/demo';
import HeadlineClass from './class/headlineclass';
import EmployeeClass from './class/employeeclass';
import EmployeeClassState from './class/employeestate';
import CounterClass from './class/counterclass';
import GreetingForm from './class/greetingform';
import LifeCycle from './class/lifecycle';
import Timer from './functional/timer';
import ControlledComponent from './functional/controlled';
import ControlledClass from './class/controlledclass';
import { useState } from 'react';
import MessageInput from './functional/messageinput';
import MessageList from './functional/messagelist';
import ShoppingCart from './functional/shoppingcart';

//Functional component 
function App() {
  const[messages, setMessages] = useState([]);

 const handleNewMessage = (newMessage) =>{
    setMessages([...messages,newMessage]);
  }

  return (
    <div>
      
      <ShoppingCart/>
    </div>
  );
}

export default App;
