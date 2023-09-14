import React from 'react';
import Hero from '../components/UI/Hero';
import Services from '../components/UI/Services';
import Team from '../components/UI/Team';
import Innovations from '../components/UI/Innovations';
import WhyChooseUs from '../components/UI/WhyChooseUs';
import CoreValues from '../components/UI/CoreValues';


const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <CoreValues />
      <Innovations />
      <Team />
      
    </div>
  )
}

export default Home;