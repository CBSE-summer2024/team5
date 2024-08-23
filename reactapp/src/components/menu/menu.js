import React, { useEffect, useState } from 'react';
import './menu.css';

const CategorySection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="category-container">
      <div className="category-sidebar">
        <h3 className="category-title">Category</h3>
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category} className="category-item">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategorySection;
