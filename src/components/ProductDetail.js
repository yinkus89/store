// src/components/ProductDetail.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Sample product data for demonstration
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

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} has been added to the cart.`);
  };

  return (
    <div className="product-detail-container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={() => navigate("/products")}>Back to Products</button>
    </div>
  );
};

export default ProductDetail;
