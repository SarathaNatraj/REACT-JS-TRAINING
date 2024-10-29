import logo from './logo.svg';
import './App.css';
import Home from './components/home';

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import About from './components/about';
import Profile from './components/profile';
import ShoppingCart from './components/shoppingcart';
import MessagingApp from './components/real-time-messaging/realtimemessage';

function App() {
  return (
    <Router>

      <div>
        <nav>
          <a href="/">Home</a> <br/>
          <a href="/about">About</a> <br/>
          <a href="/profile">Profile</a> <br/>
          <a href="/shoppingcart">Shopping Cart</a> <br/>
          <a href="/messaging">Messaging App</a> <br/>
        </nav>
      </div>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/profile" element={<Profile/>} />
         <Route path="/shoppingcart" element={<ShoppingCart/>} />
         <Route path="/messaging" element={<MessagingApp/>} />
         
      </Routes>
    </Router>
  );
}

export default App;
