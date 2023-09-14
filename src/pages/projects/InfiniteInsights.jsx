import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../styles/infinite-insights.css';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

import img1 from '../../assets/images/projectii.jpg';

const InfiniteInsights = () => {
  return (
    <div>
        <div className="project">
            <h1>Infinite Insights</h1>
            <p>Empowering Business Owners with Revenue Insights</p>            
        </div>
        <Container className='innovations'>
            <Row>
                <Col>
                    <div className="project-info">
                            <img src={img1} alt=''/>
                    </div>
                    <div className="team-content">
                        <p>
                            Introducing Infinity Insights (I.I), a cutting-edge application meticulously designed to cater to the distinct needs of individual business owners. Leveraging the power of data analytics, I.I empowers entrepreneurs with a robust suite of tools for seamless revenue tracking and analysis.
                        </p>
                        <p>
                            By harnessing real-time revenue data, business owners can unveil invaluable insights, bolstering their decision-making prowess and propelling business growth. The user-friendly interface and interactive dashboards of I.I streamline the revenue analysis process, ensuring quick access to critical information. With I.I as their trusted ally, entrepreneurs can uncover hidden opportunities, identify potential challenges, and strategize effectively, enabling them to optimize performance and thrive in a dynamic market landscape.
                        </p>
                    </div>                    
                </Col>
            </Row>
            
        </Container>
        <a href='/' className='back'> <ArrowBackIosNewOutlinedIcon /> Back</a>
    </div>
  )
}

export default InfiniteInsights;