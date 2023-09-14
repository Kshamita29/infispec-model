import React from 'react';
import '../../styles/why-choose-us.css'
import { Container, Row, Col } from 'reactstrap';

const WhyChooseUs = () => {
  return (
    <section style={{background:'#008000', padding:'3rem 0rem'}}>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="why-choose-us">
                        <div className="wcu-head">
                            <h1>Why Choose Us?</h1>
                        </div>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="why-choose-us-content">
                        <div className="reasons">
                            <h5 className='grid-item'>1.</h5>
                            <h5 className='grid-item'>2.</h5>
                            <h5 className='grid-item'>3.</h5>
                            <h5 className='grid-item'>4.</h5>
                            <h5 className='grid-item'>5.</h5>
                            <h5 className='grid-item'>6.</h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default WhyChooseUs