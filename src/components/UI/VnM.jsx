import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import '../../styles/v-n-m.css';

const VnM = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col>
                    <div className='vnm-container'>
                        <div className="vission">
                            <h2>Our Vission</h2>
                            <p>
                                Pioneering the evolution of IT companies worldwide, we envision an interconnected digital realm where our guidance empowers businesses to exceed their potential, setting new industry standards.
                            </p>
                            <p>
                                We aspire to be the guiding light that propels them to the forefront of innovation, reshaping industries and impacting societies positively. By fostering an ecosystem of resilience and creativity, we envisage a world where technological evolution knows no bounds.
                            </p>
                        </div>
                        <div className="mission">
                            <h2>Our Mission</h2>
                            <p>
                                Empowering industries through tailored solutions, strategic partnerships, and transformative technologies. We're committed to driving efficiency, innovation, and growth, while ensuring a seamless digital transformation journey.
                            </p>
                            <p>
                                Our mission extends to nurturing innovation, fostering collaboration, and navigating enterprises through the ever-evolving technological landscape. We measure our success by the tangible impact we facilitate in the lives of these companies.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default VnM