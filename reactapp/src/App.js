import React from 'react';
import NavbarComponent from './components/Navbar/navbar.js';
import CategorySection from './components/menu/menu.js';
import HeaderSection from './components/header/header.js';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeaderSection />
      <CategorySection />
    </div>
  );
}

export default App;
