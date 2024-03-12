import React from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import SliderComponent from './SliderComponent';
import Products from './Products'
import Team from './Team';

import Services from './Services';

const Home = () => {
  return (
    <div>
      <SliderComponent />      
      <AboutUs/>
      <Products/>
      <Services/>
      <Team/>
      <ContactUs/>      
    </div>
  );
};

export default Home;