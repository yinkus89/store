// src/components/Products.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"; // Import the SearchBar component

// Sample product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    description: "This is a great product.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    description: "This is another great product.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 49.99,
    description: "This product is awesome.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    price: 19.99,
    description: "A must-have item.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Product 5",
    price: 59.99,
    description: "You will love this product.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Product 6",
    price: 89.99,
    description: "This is a premium product.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Product 7",
    price: 99.99,
    description: "Top-notch quality.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Product 8",
    price: 39.99,
    description: "Best value for money.",
    image: "https://via.placeholder.com/150",
  },
];

const Products = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="products-container">
      <h1>Products</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price.toFixed(2)}</p>
              <Link to={`/products/${product.id}`}>View Details</Link>
              <button onClick={() => addToCart(product)}>Add to Basket</button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
