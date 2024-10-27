import React from "react";

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.thumbnail} alt={product.title} />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Basket</button>
  </div>
);

export default ProductCard;
