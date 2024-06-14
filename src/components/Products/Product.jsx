import React from "react";

const Product = ({ imageSrc, title, price }) => {
  return (
    <div className="product-card">
      <img src={imageSrc} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price}</p>
        <button className="btn btn-outline-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
