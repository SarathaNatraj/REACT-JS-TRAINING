import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
