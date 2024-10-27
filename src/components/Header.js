// src/components/Header.js
import React from "react";
import "../App.css";
import logo from "../assets/logo.jpeg"; // Adjust the path according to your structure
import banner from "../assets/banner.jpeg";

const Header = () => {
  return (
    <header className="header">
      <img src={banner} alt="Store Banner" className="banner" />
      <img src={logo} alt="Store Logo" className="logo" />
      <h1>My Fake Store</h1>
    </header>
  );
};

export default Header;
