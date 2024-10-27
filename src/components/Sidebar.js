import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="sidebar">
    <Link to="/">Home</Link>
    <Link to="/products">Latest Products</Link>
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact</Link>
  </aside>
);

export default Sidebar;
