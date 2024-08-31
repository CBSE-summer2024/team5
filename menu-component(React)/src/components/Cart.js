// CategorySection.js

import React, { useEffect, useState } from 'react';
import './cart.css'; // Updated file name for the CSS
import { FaBox } from 'react-icons/fa';

const CategorySection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="category-grid-container">
      <h2 className="category-header">Browse Categories</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category} className="category-card">
            <div className="category-icon">
              <FaBox />
            </div>
            <h3 className="category-name">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
