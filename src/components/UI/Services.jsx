import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../styles/services.css';
import img1 from '../../assets/images/services.png';

import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';

const Services = () => {
  return (
    <section style={{background:'#eb93b9', padding:'3rem 0rem'}}>
      <Container style={{paddingBottom:'1rem'}}>
        <Row>
          <Col lg='5'>
            <img src={img1} alt="Image 1" />
          </Col>
          <Col lg='7' className='d-flex justify-content-center flex-column'>
            <Row>
              <Col sm='5' className='box box-modern' style={{margin:'0px 20px 20px 0px'}}>
                <div className="box-modern-content">
                    <h3 className='box-morder-big-title'>What We Offer?</h3>
                    <div className="box-modern-decor"></div>
                    <a href='/services' className='button button-primary button-ujarak'> View All Services</a>
                </div>
              </Col>
              <Col sm='5' className='box box-modern box-modern-2' style={{margin:'0px 0px 20px 0px',}}>
                <div className="box-modern-content">
                    <div className='icon'>
                        <span className="material-ui-icon">
                            <BarChartOutlinedIcon style={{fontSize:'55px'}} />
                        </span>
                    </div>
                    <h3 className='box-morder-big-title cap-title'>Business<br/>Insights</h3>
                    <div className="box-modern-decor"></div>
                    <p className='box-modern-text'>We provide business Insights for Individual business owners and local organisations in a user friendly manner.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm='5' className='box box-modern box-modern-2' style={{margin:'20px 20px 0px 0px'}}>
                <div className="box-modern-content">
                    <div className='icon'>
                        <span className="material-ui-icon">
                            <WebOutlinedIcon style={{fontSize:'55px'}} />
                        </span>
                    </div>
                    <h3 className='box-morder-big-title cap-title'>Web<br/>Applications</h3>
                    <div className="box-modern-decor"></div>
                    <p className='box-modern-text'>We set up ebusiness sites to maintain online presence and generate revenue world wide.</p>
                </div>
              </Col>
              <Col sm='5' className='box box-modern box-modern-2' style={{margin:'20px 0px 0px 0px'}}>
                <div className="box-modern-content">
                    <div className='icon'>
                        <span className="material-ui-icon">
                            <SecurityOutlinedIcon style={{fontSize:'55px'}} />
                        </span>
                    </div>
                    <h3 className='box-morder-big-title cap-title'>Software<br/>Security</h3>
                    <div className="box-modern-decor"></div>
                    <p className='box-modern-text'>We maintain confidential and sensitive data with utmost security and provide the database and application security with a strong firewall system.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
