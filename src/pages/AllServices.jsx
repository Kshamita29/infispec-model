import React from 'react';
import '../styles/allservices.css';
import gif from '../assets/images/animations/urban-office-woman.gif';

import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

import { Container, Row, Col } from 'reactstrap';

const AllServices = () => {
  return (
    <div>
      <div className="heading">
        <h1>Services</h1>
      </div>
      <Container className='mb-4 block-services'>
        <Row className='block'>
            <Col lg='4' className='d-flex'>
                <div>
                    <div className='box_ box-morder' style={{margin:'0px 20px 20px 0px'}}>
                        <div className="box-morder-content">
                            <div className='icon'>
                                <span className="material-ui-icon">
                                    <BarChartOutlinedIcon style={{fontSize:'55px'}} />
                                </span>
                            </div>
                            <h3 className='box-morder-big-title cap-title'>Business<br/>Insights</h3>
                            <div className="box-morder-decor"></div>
                            <p className='box-morder-text'>We provide business Insights for Individual business owners and local organisations in a user friendly manner.</p>
                        </div>
                    </div>
                    <div className='box_ box-morder' style={{margin:'0px 20px 20px 0px'}}>
                        <div className="box-morder-content">
                            <div className='icon'>
                                <span className="material-ui-icon">
                                    <WebOutlinedIcon style={{fontSize:'55px'}} />
                                </span>
                            </div>
                            <h3 className='box-morder-big-title cap-title'>Web<br/>Applications</h3>
                            <div className="box-morder-decor"></div>
                            <p className='box-morder-text'>We set up ebusiness sites to maintain online presence and generate revenue world wide.</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg='4' className='d-flex'>
                <div>
                    <div className='box_ box-morder' style={{margin:'0px 20px 20px 0px'}}>
                        <div className="box-morder-content">
                            <div className='icon'>
                                <span className="material-ui-icon">
                                    <SecurityOutlinedIcon style={{fontSize:'55px'}} />
                                </span>
                            </div>
                            <h3 className='box-morder-big-title cap-title'>Software<br/>Security</h3>
                            <div className="box-morder-decor"></div>
                            <p className='box-morder-text'>We maintain confidential and sensitive data with utmost security and provide the database and application security with a strong firewall system.</p>
                        </div>
                    </div>
                    <div className='box_ box-morder' style={{margin:'0px 20px 20px 0px'}}>
                        <div className="box-morder-content">
                            <div className='icon'>
                                <span className="material-ui-icon">
                                    <WorkOutlineOutlinedIcon style={{fontSize:'55px'}} />
                                </span>
                            </div>
                            <h3 className='box-morder-big-title cap-title'>Enterprise<br/>Database<br/>Applications</h3>
                            <div className="box-morder-decor"></div>
                            <p className='box-morder-text'>We design the enterprise data warehouses and provide the database solutions that encompasses and stores all of an organization's data from sources across the entire business.</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg='4' className='d-flex'>
                <div>
                    <div className='box_ box-morder' style={{margin:'0px 20px 20px 0px'}}>
                        <div className="box-morder-content">
                            <div className='icon'>
                                <span className="material-ui-icon">
                                    <LightModeOutlinedIcon style={{fontSize:'55px'}} />
                                </span>
                            </div>
                            <h3 className='box-morder-big-title cap-title'>Research<br/>based<br/>solutions</h3>
                            <div className="box-morder-decor"></div>
                            <p className='box-morder-text'>We provide solutions to multiple sectors like Education, Healthcare, Manufacturing, Constructions and Individual local businesses. We make sure to provide the solutions based on research insights of that domain.</p>
                        </div>
                    </div>
                    <div className='box_ box-morder' style={{margin:'0px 20px 20px 0px'}}>
                        <div className="box-morder-content">
                            <div className='icon'>
                                <span className="material-ui-icon">
                                    <SupportAgentOutlinedIcon style={{fontSize:'55px'}} />
                                </span>
                            </div>
                            <h3 className='box-morder-big-title cap-title'>24/7<br/>Support</h3>
                            <div className="box-morder-decor"></div>
                            <p className='box-morder-text'>We make sure to provide 24/7 technical support during the contract period.</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <img src={gif} className='image' alt="" />
      </Container>
      <a href='/' className='back'> <ArrowBackIosNewOutlinedIcon /> Back</a> 
    </div>
  )
}

export default AllServices;
