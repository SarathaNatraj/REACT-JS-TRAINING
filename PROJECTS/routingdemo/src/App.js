import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Contact from './Contact'
import About from './About'
import NotFound from "./NotFound";
import Products from "./Products";
import Product from "./Product";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
