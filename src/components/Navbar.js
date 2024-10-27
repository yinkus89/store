import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/cart">Cart ({cartCount})</Link>
    <input type="text" placeholder="Search products..." />
  </nav>
);

export default Navbar;
