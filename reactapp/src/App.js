import React, { useState } from 'react';
import NavbarComponent from './components/Navbar/navbar.jsx';
import CategorySection from './components/menu/menu.jsx';
import HeaderSection from './components/header/header.jsx';
import './App.css';
import SearchResults from './components/search/SearchResults.jsx';

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
