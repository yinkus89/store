// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail"; // Import ProductDetail
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Save cart items to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <div className="app-layout">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products addToCart={addToCart} />}
            />
            <Route
              path="/products/:id"
              element={<ProductDetail addToCart={addToCart} />} // Route to ProductDetail
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route
              path="/checkout"
              element={<Checkout cartItems={cartItems} clearCart={clearCart} />}
            />
          </Routes>
        </main>
      </div>
      <Footer /> {/* Footer added here */}
    </Router>
  );
}

export default App;
