import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

import img1 from '../../assets/images/education.jpg';

const eProfileX = () => {
  return (
    <div>
        <div className="project">
            <h1>eProfileX</h1>
            <p>Empowering Student Success through Digital Profiles</p>            
        </div>
        <Container className='innovations'>
            <Row>
                <Col>
                    <div className="project-info">
                            <img src={img1} alt=''/>
                    </div>
                    <div className="team-content">
                        <p>
                            Our groundbreaking initiative is dedicated to establishing comprehensive student profiles at the corporate level, revolutionizing the way educational data is managed. By seamlessly integrating digital resources, our platform empowers students with efficient access to a vast array of educational materials.
                        </p>
                        <p>
                            Moreover, we prioritize data accuracy and accountability, implementing robust measures to ensure reliable student data management without any loopholes. This streamlined approach not only enhances the overall learning experience but also facilitates personalized educational journeys, supporting students in achieving their academic and career goals. With our cutting-edge solution, educational institutions and corporate entities can forge stronger connections, creating a collaborative environment that fosters success and growth.
                        </p>
                    </div>                    
                </Col>
            </Row>
            
        </Container>
        <a href='/' className='back'> <ArrowBackIosNewOutlinedIcon /> Back</a>
    </div>
  )
}

export default eProfileX;