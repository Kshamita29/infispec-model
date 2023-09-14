import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/teammembers.css'

import img from '../assets/images/animations/team.png';
import mani from '../assets/images/mani.png';
import masthan from '../assets/images/masthan2.png';
import rajesh from '../assets/images/Rajesh.png';
import srisesha from '../assets/images/srisesha1.png';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const TeamMembers = () => {
  return (
    <div>
      <div className="exceptional-team">
        <h1>Our Exceptional Team</h1>
      </div>
      <Container className='team-content' style={{padding: '0rem 8rem 2rem'}}>
        <Row style={{padding: '0rem 0rem 2rem'}}>
            <Col lg='4'className='d-flex justify-center'>
                <div className='picture'>
                    <img src={img} alt=''/>
                </div>
            </Col>
            <Col lg='8' className='d-flex'>
                <div className='info'>
                    <p>
                        Step into the world of innovation and get to know the exceptional individuals who breathe life into our organization's vision. With a diverse array of talents, a wealth of experiences, and an unwavering commitment to excellence, our team collectively powers the engine of innovation. Each member contributes their unique skills and steadfast dedication, propelling us to the forefront of transformative solutions that continuously push the boundaries of what's achievable. This collaborative effort not only benefits our clients and partners but also defines the success and impact of our organization in the ever-evolving landscape of innovation.
                    </p>
                </div>
            </Col>            
        </Row>
        <div className="team-members">
            <Row style={{padding: '0rem 0rem 2rem'}}>
                <Col lg='4'className='d-flex'>
                    <div className='pic'>
                        <img src={srisesha} alt=''/>
                    </div>
                </Col>
                <Col lg='8' className='d-flex'>
                    <div className='info'>
                        <div className="team-info-title">
                            <h2 className='name'> Devi Srisesha </h2>
                            <h4 className='designation'> Executive Head </h4>
                        </div>
                        
                        <p>
                            Srisesha, <i>Founder</i> and Data Expert at Infispec, holds a Master's degree from a prestigious Indian university. With 3 years of experience in research, Data Science, and IT, she brings expertise to the field.
                        </p>
                        <p>
                            Detail-focused Data Expert with knowledge in Data analytics, Machine learning, Deep learning and A.I. Proven to understand customer requirements and translate into actionable project plans. Dedicated and hard working towards implementing end on end Software applications.
                        </p>
                    </div>
                </Col>            
            </Row>
        </div>
        <div className="team-members">
            <Row style={{padding: '0rem 0rem 2rem'}}>
                <Col lg='4'className='d-flex'>
                    <div className='pic'>
                        <img src={mani} alt=''/>
                    </div>
                </Col>
                <Col lg='8' className='d-flex'>
                    <div className='info'>
                        <div className="team-info-title">
                            <h2 className='name'> Manikanta Reddy Gopu </h2>
                            <h4 className='designation'> Senior Tech Consultant </h4>
                        </div>
                        
                        <p>
                            Manikanta, <i>Co-Founder</i> and lead Technology consultant at Infispec, brings 10 years of IT experience. His expertise includes managing diverse clients, software engineering, and he is a certified Data Architect and Technology Architect Associate.
                        </p>
                        <p>
                            With over a decade of IT experience, I specialize in Business Intelligence & Data Engineering, including Data Warehousing, Modeling, and ETL. Skilled in collaborating with diverse stakeholders, I excel in communication, Business Analysis, and requirement documentation. Proficient in AWS and Google Cloud, I am a valuable asset for database architecture design, Data Profiling, and ensuring Data Quality. Adept at problem-solving, I bring a wealth of expertise to any team.
                        </p>
                    </div>
                </Col>            
            </Row>
        </div>
        <div className="team-members">
            <Row style={{padding: '0rem 0rem 2rem'}}>
                <Col lg='4'className='d-flex'>
                    <div className='pic'>
                        <img src={rajesh} alt=''/>
                    </div>
                </Col>
                <Col lg='8' className='d-flex'>
                    <div className='info'>
                        <div className="team-info-title">
                            <h2 className='name'> Rajesh GSN </h2>
                            <h4 className='designation'> Senior Software Engineer </h4>
                        </div>
                        <p>
                            With a decade's worth of experience in the software industry, Rajesh is driven by a deep passion for innovation and technology, which fuels his commitment to shaping a brighter future for society. He is recognized for his unwavering dedication to staying current with the latest technology trends, continuously improving his technical and analytical skills. Rajesh excels in dynamic, creative, and challenging work environments, making him an invaluable member of our team. His eagerness to collaborate with colleagues and contribute to hands-on projects is a testament to his dedication.
                        </p>
                    </div>
                </Col>            
            </Row>
        </div>
        <div className="team-members">
            <Row style={{padding: '0rem 0rem 2rem'}}>
                <Col lg='4'className='d-flex'>
                    <div className='pic'>
                        <img src={masthan} alt='' style={{height:'250px', width:'250px'}}/>
                    </div>
                </Col>
                <Col lg='8' className='d-flex'>
                    <div className='info'>
                        <div className="team-info-title">
                            <h2 className='name'> Masthan M </h2>
                            <h4 className='designation'> Business Head </h4>
                        </div>
                        <p>
                            With 4.3 years of experience in SQL, SSIS, and SSRS, Masthan has developed a deep understanding of database management, data integration, and reporting solutions. This experience has empowered him to grasp the intricacies of these technologies and adeptly tackle the challenges they can overcome. Over the course of various projects, Masthan has not only refined his technical skills but also cultivated the ability to communicate complex concepts to diverse audiences.
                        </p>
                    </div>
                </Col>            
            </Row>
        </div>
      </Container>
      <a href='/' className='back'> <ArrowBackIosNewOutlinedIcon /> Back</a>      
    </div>
  )
}

export default TeamMembers;