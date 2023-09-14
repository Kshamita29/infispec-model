import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

import img1 from '../../assets/images/stayhub.jpg';

const StayHub = () => {
  return (
    <div>
        <div className="project">
            <h1>StayHub</h1>
            <p>Building a Vibrant Community for PG Accomodations</p>            
        </div>
        <Container className='innovations'>
            <Row>
                <Col>
                    <div className="project-info">
                            <img src={img1} alt=''/>
                    </div>
                    <div className="team-content">
                        <p>
                            StayHub is a pioneering platform committed to revolutionizing the PG accommodation landscape by building a vibrant and inclusive community. With a focus on connecting tenants and property owners.
                        </p>
                        <p>
                            StayHub fosters meaningful relationships and encourages seamless interactions. Our platform goes beyond traditional listings, offering a user-friendly experience that enhances the search for PG stays. Tenants can explore diverse options and find accommodations that match their preferences, while property owners can showcase their spaces to a broader audience. StayHub's thriving community creates an environment where individuals can connect, collaborate, and create lasting memories, turning PG stays into unforgettable experiences.
                        </p>
                    </div>                    
                </Col>
            </Row>
            
        </Container>
        <a href='/' className='back'> <ArrowBackIosNewOutlinedIcon /> Back</a>
    </div>
  )
}

export default StayHub;