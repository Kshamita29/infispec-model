import React from 'react';
import './footer.css';

import logo from '../../assets/images/infi.png';

import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const quick_links=[
  {
    path:'/',
    display: 'Home',
  },
  {
    path:'/about',
    display: 'About',
  },
  {
    path:'/team',
    display: 'Team',
  },
  {
    path:'/services',
    display: 'Services',
  },
];

const quick_links2=[
  {
    path:'/',
    display: 'FAQs',
  },
  {
    path:'/',
    display: 'Career',
  },
  {
    path:'/',
    display: 'Blog',
  },
];

const Footer = () => {
  return (
    <><footer className='footer'>
      <Container style={{ maxWidth: '100%' }}>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>We provide technical solutions for multiple sectors such as Education, 
                Ecommerce , Healthcare, Pharma, Retail Construction Manufacturing and 
                other businesses. We are a team of experts who aimed at your next 
                technical innovation.</p>

                <div className='social__links d-flex align-items-center gap-4'>
                  <span>
                    <Link to='https://infispec.in/'>
                      <i class="ri-global-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to='https://github.com/infispec'>
                      <i class="ri-github-fill"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to='https://www.linkedin.com/company/infispec/'>
                      <i class="ri-linkedin-box-fill"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to='https://www.instagram.com/infispec/'>
                      <i class="ri-instagram-line"></i> 
                    </Link>
                  </span>

                </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>

            <ListGroup className='footer_quick-links'>
              {
                quick_links.map((item,index) => (
                  <ListGroupItem 
                  key={index} 
                  className='ps-0 border-0 quick-link'
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Quick Links</h5>

            <ListGroup className='footer_quick-links'>
              {
                quick_links2.map((item, index) => (
                  <ListGroupItem 
                  key={index} 
                  className='ps-0 border-0 quick-link'
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>

          </Col>

          <Col lg='3'>
            <h5 className='footer__link-title'>Contact</h5>

            <ListGroup className='footer__quick-links d-flex align-items-start'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' style={{ backgroundColor: 'transparent', border: 'none' }}>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                        <i class="ri-map-pin-line"></i>
                      </span>
                      Address:
                    </h6>

                    <p className='mb-0'>Visakapatanam / Hyderabad</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' style={{ backgroundColor: 'transparent', border: 'none' }}>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                        <i class="ri-mail-line"></i>
                      </span>
                      Email:
                    </h6>

                    <p className='mb-0'>contact@infispec.in</p>
              </ListGroupItem> 
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' style={{ backgroundColor: 'transparent', border: 'none' }}>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                        <i class="ri-phone-fill"></i>
                      </span>
                      Phone:
                    </h6>

                    <p className='mb-0'>+91 - 9790333937 / 8978206276</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' style={{ backgroundColor: 'transparent', border: 'none' }}>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                        <i class="ri-time-line"></i>
                      </span>
                      Working Hours:
                    </h6>

                    <p className='mb-0'>9:00AM - 6:00PM</p>
              </ListGroupItem> 
            </ListGroup>
          </Col>

          <Col lg='12' >
            <p className="copyright">
              <ul>
                <li>Copyright © 2023 </li> 
                <li> Infispec Innovations Pvt. Ltd. </li> 
                <li>All rights are Reserved.</li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}

export default Footer;