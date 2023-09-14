import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image'; 
import img1 from '../../assets/images/hero-carousel/5.jpg';
import img2 from '../../assets/images/hero-carousel/6.jpg';
import img3 from '../../assets/images/hero-carousel/7.jpg';

const slideImages = [
  {
    photo: img1,
    caption: "Welcome to",
    subCaption: "INFISPEC : A Spectrum of Solutions",
  },
  {
    photo: img2,
    caption: "Our Mission",
    subCaption: "Empowering Industries and Individuals by Unleashing the Potential of Technical Solutions",
  },
  {
    photo: img3,
    caption: "Revolution starts from you",
    subCaption: "We envision a future where innovative technical solutions revolutionize traditional practices, catalyzing unprecedented growth, efficiency, and positive impact.",
  }
];

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: "400px",
  width: "100%",
  backgroundSize: 'cover',
};

const backdrop ={
  width: "100%",
  height: "100%",
  background: 'rgba(0, 0, 0, 0.7)', // Add translucent background color
  color: 'white', // Set text color to white
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const CapStyle = {
  width: "60%",
  padding: "60px 50px",
  textAlign: "center",
};

const spanStyle = {
  fontSize: "38px",
  marginBottom: "10px",
  lineHeight: "80px",
};

const SubStyle = {  
  fontSize: "24px",  
  textAlign: "center",
  paddingTop: "10px",
  lineHeight: "40px",
};

function ImageSlider() {
  return (
    <div className='slide-container'>
      <Fade>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${image.photo})` }}>
              <div style={backdrop}>
                <div style={CapStyle}>
                  <span style={spanStyle}>{image.caption}</span><br/>
                  <span style={SubStyle}>{image.subCaption}</span>
                </div>                
              </div>              
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default ImageSlider;
