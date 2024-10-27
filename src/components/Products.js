// src/components/Products.js
import React from "react";
import { Link } from "react-router-dom";

// Sample product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    description: "This is a great product.",
    image: "https://via.placeholder.com/150", // Replace with actual image paths
  },
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    description: "This is another great product.",
    image: "https://via.placeholder.com/150", // Replace with actual image paths
  },
  {
    id: 3,
    name: "Product 3",
    price: 49.99,
    description: "This product is awesome.",
    image: "https://via.placeholder.com/150", // Replace with actual image paths
  },
  {
    id: 4,
    name: "Product 4",
    price: 19.99,
    description: "A must-have item.",
    image: "https://via.placeholder.com/150", // Replace with actual image paths
  },
  {
    id: 5,
    name: "Product 5",
    price: 59.99,
    description: "You will love this product.",
    image: "https://via.placeholder.com/150", // Replace with actual image paths
  },
  {
    id: 6,
    name: "Product 6",
    price: 89.99,
    description: "This is a premium product.",
    image: "https://via.placeholder.com/150", // Replace with actual image paths
  },
  {
    id: 7,
    name: "Product 7",
    price: 99.99,
    description: "Top-notch quality.",
    image: "https://via.placeholder.com/150", // Replace with actual image paths
  },
  {
    id: 8,
    name: "Product 8",
    price: 39.99,
    description: "Best value for money.",
    image: "https://via.placeholder.com/150", // Replace with actual image paths
  },
];

const Products = ({ addToCart }) => {
  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            {/* Link to Product Detail */}
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
