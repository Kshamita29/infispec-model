import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import img from '../assets/images/animations/0cd3091df76003c144f63cf217c15da4.gif'
import '../styles/about.css';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import VnM from '../components/UI/VnM';
import usercheck from '../assets/images/icons/user-check-solid.svg';
import integrity from '../assets/images/icons/verified_user_FILL0_wght400_GRAD0_opsz24.svg';
import excellent from '../assets/images/icons/bag-check-fill.svg';
import checklist from '../assets/images/icons/list-check.svg';
import unity from '../assets/images/icons/unity.svg';
import journal from '../assets/images/icons/journal-check.svg';


const About = () => {
  return (
    <div>
      <div className="head">
        <h1>About Us</h1>
      </div>
      <Container className='about-content'>
        <Row>
            <Col lg='4'className='d-flex justify-center'>
                <div className='picture'>
                    <img src={img}/>
                </div>
            </Col>
            <Col lg='8' className='d-flex'>
                <div>
                    <p>
                        In a life-changing moment, my father shared with me a tip on accountability passed down from his father. The simple yet profound advice was to note down every penny in his possession. It sparks a journey towards financial accountability. Recognizing the potential impact on the economy in the long term, we embraced this philosophy of tracking even minor changes in our finances.
                    </p>
                    <p>
                        As software engineers, we took it a step further by utilizing Data Analytics and visualization to monitor our annual expenses. This newfound expertise led us to offer solutions to local businesses, enabling them to have insights of their revenues and establish their own accountable databases and e business applications.
                    </p>
                    <p>
                        Our journey began with a penny and a note, but it evolved into a mission to promote accountability on a broader scale. By leveraging technology, we empowered individuals and organizations to take charge of their business in more technical ways and track even minor changes. Through our efforts, we aimed to foster a prosperous future where every individual understands and embraces technology in their day to day activities.
                    </p>
                </div>
            </Col>            
        </Row>
      </Container>
      <VnM />
      <Container>
        <Row>
          <Col>
            <div className="core-values">
              <div className="core-head">
                <h1>Core Values</h1>
                <div className="box-modern-decor"></div>
                <h5>Fostering a Culture of Success: Navigating Our Path with Core Values</h5>
              </div>
              <div className="core-values-description">
                <p>
                  These core values are integral to our organization and guide our actions and decisions. By upholding these values, we aim to foster a positive work environment, build strong client relationships, and drive our overall success. Let's dive deeper into each core value:
                </p>
                <div className='description-container'>
                      <div className="single-core-value">
                          <div className="core-value-icon">
                            <img src={usercheck} alt=''/>
                          </div>
                          <div className="value">
                            <h4>CLIENT VALUE</h4>
                          </div>
                          <div className="description">
                            <p>
                              We prioritize meeting and exceeding client expectations by delivering high-quality services consistently. We understand that our clients are at the center of our business, and their satisfaction is crucial to our growth and success.
                            </p>
                          </div>
                      </div>
                      <div className="single-core-value">
                            <div className="core-value-icon">
                              <img src={integrity} alt=''/>
                            </div>
                            <div className="value">
                              <h4>INTEGRITY & TRANSPARENCY</h4>
                            </div>
                            <div className="description">
                              <p>
                                We adhere to the highest standards of ethical conduct, sincerity, and openness in all our interactions and transactions. We believe in conducting business with honesty, fairness, and integrity, fostering trust with our clients, employees, and partners.
                              </p>
                            </div>
                      </div>
                      <div className="single-core-value">
                            <div className="core-value-icon">
                              <img src={excellent} alt=''/>
                            </div>
                            <div className="value">
                              <h4>EXCELLENCE</h4>
                            </div>
                            <div className="description">
                              <p>
                                We have an unwavering commitment to excellence and continuous improvement. We constantly strive to enhance our skills, knowledge, and services to provide the best possible outcomes for our clients. We embrace a mindset of learning and growth to stay ahead in an ever-evolving business landscape.
                              </p>
                            </div>
                      </div>
                      <div className="single-core-value">
                            <div className="core-value-icon">
                              <img src={checklist} alt=''/>
                            </div>
                            <div className="value">
                              <h4>PIONEERING</h4>
                            </div>
                            <div className="description">
                              <p>
                                We are not afraid to take bold and agile steps to overcome challenges. By leveraging deep customer insights, we aim to develop innovative solutions that address their evolving needs. We encourage a culture of exploration, creativity, and innovation within our organization.      
                              </p>
                            </div>
                      </div>
                      <div className="single-core-value">
                            <div className="core-value-icon">
                              <img src={unity} alt=''/>
                            </div>
                            <div className="value">
                              <h4>UNITY</h4>
                            </div>
                            <div className="description">
                              <p>
                                We recognize that our people and partners are vital assets in our journey towards success. We invest in our employees, enabling them to continuously learn and develop their skills. We foster a caring and collaborative work environment based on trust, respect, and mutual support.
                              </p>
                            </div>
                      </div>
                      <div className="single-core-value">
                            <div className="core-value-icon">
                              <img src={journal} alt=''/>
                            </div>
                            <div className="value">
                              <h4>ACCOUNTABILITY</h4>
                            </div>
                            <div className="description">
                              <p>
                                We take ownership and responsibility for our commitments and actions. We understand that being accountable is essential for building trust with our stakeholders. We strive to deliver on our promises and take corrective measures if we fall short, learning from our experiences to improve our future performance.
                              </p>
                            </div>
                      </div>
                </div>
                <p>
                  By embracing these core values, we aim to create a positive impact on our clients, employees, partners, and the community at large. These values serve as a compass, guiding our decisions and actions as we pursue growth, excellence, and a sustainable future.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <a href='/' className='back'> <ArrowBackIosNewOutlinedIcon /> Back</a>      
    </div>
  )
};

export default About;