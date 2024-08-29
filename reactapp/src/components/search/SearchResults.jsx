import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="search-results-section">
      {results.map((product) => (
        <div key={product.id} className="product-card">
          <div className="card fixed-size-card">
            <img src={product.image} alt={product.title} className="card-img-top product-image" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{truncateText(product.description, 100)}</p>
              <p className="card-text"><strong>${product.price}</strong></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
