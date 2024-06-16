import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Product.css';
import { useCart } from '../../contexts/CartContext';

const Product = ({ id, imageSrc, title, description, price }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, price, quantity });
  };

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return description;
  };

  return (
    <div className="product">
      <div className="product-image-container">
        <img src={imageSrc} alt={title} className="product-image" />
      </div>
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{truncateDescription(description)}</p>
      <p className="product-price">${price.toFixed(2)}</p>
      <div className="product-controls">
        <div className="quantity-selector">
          <button
            className="quantity-button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button
            className="quantity-button"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
