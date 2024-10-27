// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ProductDetail from "./components/ProductDetail"; // Ensure this import is correct
import NotFound from "./components/NotFound"; // Correct the import name
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

  // Function to add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Function to clear the cart
  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <Header />
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
              element={<ProductDetail addToCart={addToCart} />}
            />{" "}
            {/* Product detail route */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={<Cart cartItems={cartItems} clearCart={clearCart} />}
            />
            <Route
              path="/checkout"
              element={<Checkout cartItems={cartItems} clearCart={clearCart} />}
            />
            <Route path="*" element={<NotFound />} />{" "}
            {/* Catch-all route for 404 errors */}
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
