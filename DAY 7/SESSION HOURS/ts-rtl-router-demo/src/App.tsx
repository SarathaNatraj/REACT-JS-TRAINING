import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Count } from "./components/Count";
import { Login } from "./components/Login";
import { Query } from "./components/Query";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/count" element={<Count />} />
        <Route path="/login" element={<Login />} />
        <Route path="/query" element={<Query />} />
      </Routes>
    </div>
  );
}
