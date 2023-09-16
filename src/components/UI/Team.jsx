import React from 'react';
import '../../styles/team.css'
import { Container, Row, Col } from 'reactstrap';
import img1 from '../../assets/images/mani (2).jpeg';
import img2 from '../../assets/images/masthan.jpg';
import img3 from '../../assets/images/rajesh.jpg';
import img4 from '../../assets/images/srisesha1.jpg';


import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Team = () => {
  return (
    <section style={{background:'#FCFCD4', padding:'3rem 0rem'}}>
        <div className="team">
            <h1>Our Exceptional Team</h1>
            <p>Discover the diverse talents and unwavering dedication of the individuals who bring innovation to life at our organization.</p>
        </div>
        <Container>
            <Row>
                <Col lg='3' md='6' sm='6'>
                    <div className="single-team">
                        <div className="team-member-thumb">
                            <img src={img4}/>
                        </div>

                        <div className="team-member-content">
                            <div className="team-content-title">
                                <h2 className='name'>Devi Srisesha</h2>
                                <h5 className='designation'>Data Expert</h5>
                            </div>
                            <div className="team-social-icon">
                                <a href='https://github.com/srisesha'><GitHubIcon/></a>
                                <a href='https://www.linkedin.com/in/sabbella-devi-srisesha'><LinkedInIcon/></a>
                                <a href='https://srisesha.github.io/Powerbi/'><InsertLinkIcon/></a>
                            </div>
                        </div>
                    </div>                    
                </Col>
                <Col lg='3' md='6' sm='6'>
                    <div className="single-team">
                        <div className="team-member-thumb">
                            <img src={img1}/>
                        </div>
                    
                        <div className="team-member-content">
                            <div className="team-content-title">
                                <h2 className='name'>Manikanta Reddy</h2>
                                <h5 className='designation'>Lead Technology Consultant</h5>
                            </div>
                            <div className="team-social-icon">
                                <a href='#'><GitHubIcon/></a>
                                <a href='https://www.linkedin.com/in/manikanta-reddy-gopu-3328a8157'><LinkedInIcon/></a>
                                <a href='#'><InsertLinkIcon/></a>
                            </div>
                        </div>
                    </div>                    
                </Col>
                <Col lg='3' md='6' sm='6'>
                    <div className="single-team">
                        <div className="team-member-thumb">
                            <img src={img2} style={{height:'300px'}}/>
                        </div>
                    
                        <div className="team-member-content">
                            <div className="team-content-title">
                                <h2 className='name'>Masthan M</h2>
                                <h5 className='designation'>Business Head</h5>
                            </div>
                            <div className="team-social-icon">
                                <a href='#'><GitHubIcon/></a>
                                <a href='#'><LinkedInIcon/></a>
                                <a href='#'><InsertLinkIcon/></a>
                            </div>
                        </div>
                    </div>                    
                </Col>
                <Col lg='3' md='6' sm='6'>
                    <div className="single-team">
                        <div className="team-member-thumb">
                            <img src={img3}/>
                        </div>
                    
                        <div className="team-member-content">
                            <div className="team-content-title">
                                <h2 className='name'>Rajesh GSN</h2>
                                <h5 className='designation'>Senior Software Engineer</h5>
                            </div>
                            <div className="team-social-icon">
                                <a href='#'><GitHubIcon/></a>
                                <a href='https://www.linkedin.com/in/rajeshgsn'><LinkedInIcon/></a>
                                <a href='#'><InsertLinkIcon/></a>
                            </div>
                        </div>
                    </div>                    
                </Col>
                
            </Row>
            <div className="learn-more-button">
                <a href='/team' className='learn-more button button-primary button-ujarak'>Learn More <ArrowRightAltIcon/></a>
            </div>
        </Container>
    </section>
  )
};

export default Team;