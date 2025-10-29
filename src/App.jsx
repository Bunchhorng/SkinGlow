import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./components/ProductDetail";
import Cart from "./pages/Cart";
import AllProduct from "./components/Data/AllProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home products={AllProduct}/>} />
            <Route path="/products" element={<Product products={AllProduct} />}/>
            <Route path="/products/:id" element={<ProductDetail products={AllProduct}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
