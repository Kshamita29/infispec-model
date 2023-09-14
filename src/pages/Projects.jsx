import React from 'react';

import '../styles/projects.css';
import { Container, Row, Col } from 'reactstrap';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';


import img1 from '../assets/images/projects/revenue.jpg';
import img2 from '../assets/images/projects/student profile.png';
import img4 from '../assets/images/projects/tax.png';
import img5 from '../assets/images/projects/location.png';

import WhyChooseUs from '../components/UI/WhyChooseUs';


const Projects = () => {
  return (
    <div>
      <div className="team">
            <h1>Upcomming Innovations</h1>
            <p>Stay tuned for our upcoming projects, where we're gearing up to push the boundaries of innovation and deliver cutting-edge IT solutions that will shape the future of technology.</p>
        </div>
        <Container className='innovations'>
            <Row>
                <Col lg='3' md='6' sm='6'>
                    <div className="single-project">
                        <div className="project-member-thumb">
                            <img src={img1} alt=''/>
                        </div>
                    
                        <div className="project-member-content">
                            <div className="project-content-title">
                                <h2 className='name'>Infinite Insights</h2>
                                <h5 className='description'>EMPOWERING BUSINESS OWNERS WITH REVENUE INSIGHTS</h5>
                            </div>
                            <div className="project-social-icon">
                                <a href='/infinite-insights'><InsertLinkIcon/></a>
                            </div>
                        </div>
                    </div>                    
                </Col>
                <Col lg='3' md='6' sm='6'>
                    <div className="single-project">
                        <div className="project-member-thumb">
                            <img src={img2} alt='' style={{height:'300px'}}/>
                        </div>
                    
                        <div className="project-member-content">
                            <div className="project-content-title">
                                <h2 className='name'>eProfileX</h2>
                                <h5 className='description'>Empowering Student Success through Digital Profiles</h5>
                            </div>
                            <div className="project-social-icon">
                                <a href='/e-profile'><InsertLinkIcon/></a>
                            </div>
                        </div>
                    </div>                    
                </Col>
                <Col lg='3' md='6' sm='6'>
                    <div className="single-project">
                        <div className="project-member-thumb">
                            <img src={img4} alt=''/>
                        </div>

                        <div className="project-member-content">
                            <div className="project-content-title">
                                <h2 className='name'>MagiCA</h2>
                                <h5 className='description'>STREAMLINING TAX FILING FOR COMPANIES</h5>
                            </div>
                            <div className="project-social-icon">
                                <a href='/tax'><InsertLinkIcon/></a>
                            </div>
                        </div>
                    </div>                    
                </Col>
                <Col lg='3' md='6' sm='6'>
                    <div className="single-project">
                        <div className="project-member-thumb">
                            <img src={img5} alt=''/>
                        </div>
                    
                        <div className="project-member-content">
                            <div className="project-content-title">
                                <h2 className='name'>Stay Hub</h2>
                                <h5 className='description'>BUILDING A VIBRANT COMMUNITY FOR PG ACCOMMODATIONS</h5>
                            </div>
                            <div className="project-social-icon">
                                <a href='/stay'><InsertLinkIcon/></a>
                            </div>
                        </div>
                    </div>                    
                </Col>
            </Row>
            
        </Container>
        <WhyChooseUs />
        <a href='/' className='back'> <ArrowBackIosNewOutlinedIcon /> Back</a>
    </div>
  )
}

export default Projects;