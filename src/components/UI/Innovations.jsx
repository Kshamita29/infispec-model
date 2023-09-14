import React from 'react';
import Slider from 'react-slick';
import '../../styles/innovations.css';
import { Container, Col } from 'reactstrap';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
// import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';

// Import your images here
import img1 from '../../assets/images/projects/revenue.jpg';
import img2 from '../../assets/images/projects/student profile.png';
import img4 from '../../assets/images/projects/tax.png';
import img5 from '../../assets/images/projects/location.png';


const CustomPrevArrow = (props) => (
    <div className="slick-arrow slick-prev">
      <button onClick={props.onClick} className="btn btn-primary"></button>
    </div>
  );
  
  // Custom next arrow component
  const CustomNextArrow = (props) => (
    <div className="slick-arrow slick-next">
      <button onClick={props.onClick} className="btn btn-primary"></button>
    </div>
  );


const Innovations = () => {
  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  prevArrow: <CustomPrevArrow />, // Add custom previous arrow component
  nextArrow: <CustomNextArrow />, // Add custom next arrow component
};

  // Define an array of objects representing your innovations with images and descriptions
  const innovations = [
    {
      name: 'Infinite Insights',
      description: 'EMPOWERING BUSINESS OWNERS WITH REVENUE INSIGHTS',
      image: img1,
      link: '/infinite-insights',
    },
    {
      name: 'eProfileX',
      description: 'Empowering Student Success through Digital Profiles',
      image: img2,
      link: '/e-profile',
    },
    {
      name: 'MagiCA',
      description: 'STREAMLINING TAX FILING FOR COMPANIES',
      image: img4,
      link: '/tax',
    },
    {
      name: 'Stay Hub',
      description: 'BUILDING A VIBRANT COMMUNITY FOR PG ACCOMMODATIONS',
      image: img5,
      link: '/stay',
    },
  ];

  return (
    <section style={{background:'#ffd3d1', padding:'3rem 0rem'}}>
      <div className="team">
        <h1>Upcoming Innovations</h1>
        <p>Stay tuned for our upcoming projects, where we're gearing up to push the boundaries of innovation and deliver cutting-edge IT solutions that will shape the future of technology.</p>
      </div>
      <Container>
        <Slider {...settings}>
          {innovations.map((innovation, index) => (
            <Col key={index}>
              <div className="single-team">
                <div className="team-member-thumb">
                  <img src={innovation.image} alt={`Innovation ${index + 1}`} />
                </div>
                <div className="team-member-content">
                  <div className="team-content-title">
                    <h2 className='name'>{innovation.name}</h2>
                    <h5 className='description'>{innovation.description}</h5>
                  </div>
                  <div className="team-social-icon">
                    <a href={innovation.link}><InsertLinkIcon /></a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Slider>
        <div className="learn-more-button">
          <a href='/projects' className='learn-more button button-primary button-ujarak'>View All <ArrowRightAltIcon /></a>
        </div>        
      </Container>
    </section>
  );
};

export default Innovations;
