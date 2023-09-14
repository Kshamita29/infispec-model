import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

import img1 from '../../assets/images/taxpro.jpg';


const TaxProConnect = () => {
  return (
    <div>
        <div className="project">
            <h1>MagiCA</h1>
            <p>Streamlining Tax Filing For Companies</p>            
        </div>
        <Container className='innovations'>
            <Row>
                <Col>
                    <div className="project-info">
                            <img src={img1} alt=''/>
                    </div>
                    <div className="team-content">
                        <p>
                            MagiCA is a comprehensive application tailored for tax filing companies. Our platform simplifies the entire tax filing process, enabling companies to efficiently manage their clients' tax obligations. With secure data storage and seamless document management.
                        </p>
                        <p>
                            MagiCA ensures compliance and accuracy. The app offers intuitive features for tax preparation, e-filing, and client communication, improving efficiency and reducing manual errors. With real-time updates and advanced analytics, tax professionals can make well-informed decisions and deliver exceptional services. MagiCA empowers tax filing companies to streamline operations, enhance client satisfaction, and achieve remarkable success in the ever-evolving tax landscape.
                        </p>
                    </div>                    
                </Col>
            </Row>
            
        </Container>
        <a href='/' className='back'> <ArrowBackIosNewOutlinedIcon /> Back</a>
    </div>
  )
}

export default TaxProConnect