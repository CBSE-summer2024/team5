import React, { useState } from 'react';
import NavbarComponent from './components/Navbar/navbar.js';
import CategorySection from './components/menu/menu.js';
import HeaderSection from './components/header/header.js';
import './App.css';
import SearchResults from './components/search/SearchResults.js';

function App() {
 
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };
  
  return (
    <div className="App">
      <NavbarComponent onSearchResults={handleSearchResults} />
      <HeaderSection />
      <div className="main-content">
        <CategorySection />
        <SearchResults results={searchResults} />
      </div>
    </div>
  );
}

export default App;
