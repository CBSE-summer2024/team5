import React, { useEffect, useState } from 'react';
import './menu.css';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`category-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className={`category-sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <h3 className="category-title" onClick={handleToggle}>
          <span className="icon">{isExpanded ? <FaAngleDown /> : <FaAngleRight />}</span>
          Category
        </h3>
        <ul className={`category-list ${isExpanded ? 'expanded' : 'collapsed'}`}>
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
