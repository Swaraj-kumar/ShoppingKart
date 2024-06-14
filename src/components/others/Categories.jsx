import React, { useState } from 'react';
import './Categories.css';

export default function Categories() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="categories">
      <ul>
        <li className="dropdown-toggle" onClick={toggleDropdown}>
          All Categories
          {isDropdownVisible && (
            <ul className="dropdown-menu">
              <li>Phones & Accessories</li>
              <li>Computer & Office</li>
              <li>Consumer Electronics</li>
              <li>Men’s Clothing</li>
              <li>Women’s Clothing</li>
              <li>Sports & Outdoors</li>
              <li>Health & Beauty</li>
              <li>Home & Garden</li>
              <li>Toys & Hobbies</li>
              <li>Automobiles & Motorcycles</li>
              <li>Jewelry & Watches</li>
              <li>Pet Supplies</li>
            </ul>
          )}
        </li>
        <li>Phones & Accessories</li>
        <li>Computer & Office</li>
        <li>Consumer Electronics</li>
        <li>Men’s Clothing</li>
        <li>Women’s Clothing</li>
      </ul>
    </div>
  );
}
