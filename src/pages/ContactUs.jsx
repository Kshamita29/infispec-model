import React from 'react';
import '../styles/contact-us.css';
import { Col, Container, Row } from 'reactstrap';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CallIcon from '@mui/icons-material/Call';
import TimerIcon from '@mui/icons-material/Timer';

import img from '../assets/images/contact-us-banner.jpg';

const ContactUs = () => {
  return (
    <div style={{height:'1200px'}}>
        <div className="contact-head">
                <h1>Contact Us</h1>
                <p>
                    Elevate your business with our INFISPEC! We specialize in multiple sectors such as Education, Ecommerce , Healthcare, Pharma, Retail Construction Manufacturing and other businesses. Let's transform challenges into success. Contact us now for top-notch, personalized IT services that drive growth and innovation. Your success is our priority!
                </p>
            </div>
            <div className="contact-image">
                <img src={img} alt=''/>
            </div>
            <Container className='git-container'>            
            <Row className='d-flex w-100'>
                <Col lg='4' className='contact-address'>
                    <div className="single-contact">
                        <div className="contact-content d-flex">
                            <div className="contact-icon">
                                <LocationOnIcon style={{fontSize:'40px'}} />
                            </div>
                            <div className="contact-inner">
                                <div className="title">
                                    <h2>Our Location</h2>
                                </div>
                                <div className="description">
                                    <p>Visakapatanam / Hyderabad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-contact">
                        <div className="contact-content d-flex">
                            <div className="contact-icon">
                                <MailOutlinedIcon style={{fontSize:'40px'}} />
                            </div>
                            <div className="contact-inner">
                                <div className="title">
                                    <h2>Quick Contact</h2>
                                </div>
                                <div className="description">
                                    <p>contact@infispec.in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-contact">
                        <div className="contact-content d-flex">
                            <div className="contact-icon">
                                <CallIcon style={{fontSize:'40px'}} />
                            </div>
                            <div className="contact-inner">
                                <div className="title">
                                    <h2>Call us Now</h2>
                                </div>
                                <div className="description">
                                    <p>+91 - 9790333937 / 8978206276</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-contact">
                        <div className="contact-content d-flex">
                            <div className="contact-icon">
                                <TimerIcon style={{fontSize:'40px'}} />
                            </div>
                            <div className="contact-inner">
                                <div className="title">
                                    <h2>Working Hours</h2>
                                </div>
                                <div className="description">
                                    <p>9:00AM - 6:00PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg='7' className='get-in-touch'>
                    <div className="get-in-touch-form">
                        <h3 className='git-header'>Get In Touch</h3>
                        <div className="form-container">
                            <input type="text" placeholder='Full Name' className="text" />
                            <input type="email" placeholder='Email' className="email" />
                            <input type="text" placeholder='Subject' className="subject" />
                            <textarea placeholder='Message' className="postContent" rows={6} cols={50} />
                        </div>
                        <button className='button button-primary button-ujarak'> Send Message </button>
                    </div>
                </Col>
            </Row>
        </Container>
        

    </div>
  )
}

export default ContactUs;