import React from 'react';
import './header.css';
import bgHeader from 'C:/Users/Zahaa Muhanna/Desktop/courses/component/final-project/team5/reactapp/src/images/bg-header.jpg'

const HeaderSection = () => {
  return (
    <div className="header-section container">
      <img 
        src={bgHeader} 
        alt="Header" 
        className="header-image" 
      />
    </div>
  );
};

export default HeaderSection;
