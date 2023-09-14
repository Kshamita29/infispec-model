import React from 'react';
import '../../styles/hero.css';
import ImageSlider from './ImageSlider';

const Hero = () => {
  return <section className="hero__section">
    <div className="container" style={{ maxWidth: '100%', padding: '0px', }}>
      <div className="hero__wrapper">
        <div className="hero__content">
            <ImageSlider />
        </div>
      </div>
    </div>
  </section>
}
export default Hero;