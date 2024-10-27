// Footer.js
import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2024 E-Commerce Site. All rights reserved.</p>
      <div className="footer-links">
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="social-media">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
