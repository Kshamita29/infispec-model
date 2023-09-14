import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import '../../styles/corevalues.css';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const CoreValues = () => {
  return (
    <section style={{background:'#f0ccfa', padding:'3rem 0rem'}}>
        <Container>
            <Row>
                <Col>
                    <div className="core-values">
                        <div className="core-head">
                            <h1>Core Values</h1>
                            <div className="box-modern-decor"></div>
                            <h5>Fostering a Culture of Success: Navigating Our Path with Core Values</h5>
                        </div>
                        <div className="core-values-info">
                            <p>
                                These core values are the compass that steers our organization, shaping our choices and forging our identity. Grounded in these principles, we not only nurture a harmonious workplace and cultivate robust client bonds but also steer our collective journey toward enduring accomplishment.
                            </p>
                        </div>
                        <div className="explore-more-button">
                            <a href='/about' className='explore-more button button-primary button-ujarak'>Explore More <ArrowRightAltIcon/></a>
                        </div>
                    </div>                
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CoreValues;